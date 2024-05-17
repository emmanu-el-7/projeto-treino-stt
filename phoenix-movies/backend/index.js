'use strict';

const Hapi = require('@hapi/hapi');
const knex = require('knex');
const Joi = require('joi');
const NodeCache = require('node-cache');
const { v4: uuidv4 } = require('uuid');
const knexConfig = require('./knexfile');

const server = Hapi.server({
    port: process.env.PORT || 8000,
    host: 'localhost'
});

const conexao = knex(knexConfig);
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

cache.set('data', []);

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const data = cache.get('data') || [];
        return data;
    }
});

server.route({
    method: 'POST',
    path: '/',
    options: {
        validate: {
            payload: Joi.object({
                message: Joi.string().required()
            })
        }
    },
    handler: (request, h) => {
        const { message } = request.payload;
        const newItem = { id: uuidv4(), message };

        // Adiciona o novo item no cache
        const data = cache.get('data') || [];
        data.push(newItem);
        cache.set('data', data);

        return newItem;
    }
});

server.route({
    method: 'PUT',
    path: '/{id}',
    options: {
        validate: {
            params: Joi.object({
                id: Joi.string().required()
            }),
            payload: Joi.object({
                message: Joi.string().required()
            })
        }
    },
    handler: (request, h) => {
        const { id } = request.params;
        const { message } = request.payload;

        const data = cache.get('data') || [];
        const itemIndex = data.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            return h.response({ error: 'Item not found' }).code(404);
        }

        data[itemIndex].message = message;
        cache.set('data', data);

        return data[itemIndex];
    }
});

server.route({
    method: 'DELETE',
    path: '/{id}',
    options: {
        validate: {
            params: Joi.object({
                id: Joi.string().required()
            })
        }
    },
    handler: (request, h) => {
        const { id } = request.params;

        let data = cache.get('data') || [];
        const itemIndex = data.findIndex(item => item.id === id);

        if (itemIndex === -1) {
            return h.response({ error: 'Item not found' }).code(404);
        }

        data = data.filter(item => item.id !== id);
        cache.set('data', data);

        return { message: 'Item deleted successfully' };
    }
});

const init = async () => {
    try {
        await server.start();
        console.log(`Servidor Hapi rodando em: ${server.info.uri}`);
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
        process.exit(1);
    }
};

init();