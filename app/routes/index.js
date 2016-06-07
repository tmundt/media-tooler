/**
 * Routes - index.js/Main routes
 * @author thomasmundt
 * @created on 25.05.16.
 */

var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.use('/api/convert', require('../api/convert'));
};
