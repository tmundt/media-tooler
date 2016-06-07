/**
 * controller for all process purposes
 * @author thomasmundt
 * @created on 25.05.16.
 */

var ffmpeg = require('fluent-ffmpeg');

// convert image to video
exports.convertImageToVideo = function(req, res) {
    var pathNameSourceImage = req.param('pathToImageSource');
    var pathNameTargetVideo = req.param('pathToVideoTarget');
    console.log('SERVER: convertImageToVideo(), got image url: ' + pathNameSourceImage);
    if(err) {
        console.log('SERVER, Error while converting: ' + err);
    }

    var command = ffmpeg(pathNameSourceImage)
    //Set the path to where FFmpeg is installed
    //.setFfmpegPath("/usr/local/Cellar/ffmpeg")
    // loop for 5 seconds
        .loop(5)
        // using 25 fps
        .fps(25)
        // setup event handlers
        .on('end', function() {
            console.log('File has been converted successfully!');
        })
        .on('error', function(err) {
            console.log('an error happened: ' + err.message);
        })
        // save to file
        .save(pathNameTargetVideo);
    console.log('SERVER, convertImageToVideo(), Status: '+ status);
    res.send(status);
};