/**
 * API calls for converting processes
 * @author thomasmundt 
 * @created on 25.05.16.
 */

var express = require('express');
var controller = require('./process.controller');

var router = express.Router();

router.post('/imageToVideo/:pathToImageSource/:pathToVideoTarget, controller.convertImageToVideo');

module.exports = router;