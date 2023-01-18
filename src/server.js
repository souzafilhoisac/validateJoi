const express = require('express');

const server = new express();

const userRoute = require('./routes/userRoutes')
const errorHandler = require('./middlewares/errorHandler')

server.use(express.json());
server.use(userRoute)
server.use(errorHandler);

server.listen(3030, () => {console.log('servidor rodando na porta 3030')})