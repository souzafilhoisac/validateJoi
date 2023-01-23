require("dotenv").config();
const express = require("express");
const cors = require("cors");

const server = new express();

const userRoute = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");

server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    `http://localhost:${process.env.SERVER_PORT}`
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  server.use(cors());
  next();
});
server.use(express.json());
server.use(userRoute);
server.use(errorHandler);

server.listen(process.env.SERVER_PORT, () => {
  console.log(`servidor rodando na porta ${process.env.SERVER_PORT}`);
});
