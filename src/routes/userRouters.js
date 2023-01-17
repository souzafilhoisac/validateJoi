const express = require('express');

const route = express.Router();

const userController = require('../controllers/userController')

route.get('/', userController.getAll);
// route.get('/', (req, res) => {
//   res.send('Hello World!')
// });

route.post('/', (req) => {})

module.exports = route;