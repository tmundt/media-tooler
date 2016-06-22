/**
 * @author thomasmundt
 * Created on 21.06.16.
 */

var express = require('express');
var controller = require('./upload.controller');
var path = require('path');
var uploadPath = path.join(__dirname, '../../uploads/');
console.log(uploadPath);

var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty({ uploadDir: uploadPath });

var router = express.Router();

//router.post('/imageToVideo/:pathToImageSource/:pathToVideoTarget, controller.convertImageToVideo');
router.post('/', multipartyMiddleware, controller.uploadFile);
module.exports = router;
