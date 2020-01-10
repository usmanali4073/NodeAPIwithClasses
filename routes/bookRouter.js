const express = require("express");
const bookRouter = express.Router();
const bookController = require('../controller/bookController');


bookRouter.get('/book', bookController.get)
bookRouter.get('/book/:bookId', bookController.getById)

module.exports = bookRouter;