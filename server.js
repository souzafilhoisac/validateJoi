const express = require('express');

const server = new express();

server.use('/user', (req, res) => {});
server.use(express.json());

server.listen(3030, () => {console.log('servidor rodando na porta 3030')})