const knex = require('knex');
const knexConfig = require('./knexfile');

const db = Knex(knexConfig.development);

module.exports = db;
