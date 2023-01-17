const express = require('express');

const server = new express();

const userRouter = require('./routers/userRouters')

server.use('/user', userRouter)
server.use(express.json());

server.listen(3030, () => {console.log('servidor rodando na porta 3030')})