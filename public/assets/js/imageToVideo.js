/**
 * Created by thomasmundt on 25.05.16.
 */

var ffmpeg = require('fluent-ffmpeg');

// make sure you set the correct path to your image file
var command = ffmpeg('../images/baer01.jpg')
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
    .save('../videos/tom.m4v');
