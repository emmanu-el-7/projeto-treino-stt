FROM node:14

WORKDIR /phoenix-movies

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
