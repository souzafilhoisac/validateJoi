require("dotenv").config();
const express = require("express");

const server = new express();

const userRoute = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");

server.use(express.json());
server.use(userRoute);
server.use(errorHandler);

server.listen(process.env.SERVER_PORT, () => {
  console.log(`servidor rodando na porta ${process.env.SERVER_PORT}`);
});
