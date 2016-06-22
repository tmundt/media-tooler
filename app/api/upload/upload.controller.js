/**
 * Created by thomasmundt on 21.06.16.
 */

UploadController = function() {};

var rename = require('rename'),
    path = require('path');

UploadController.prototype.uploadFile = function(req, res) {
    var file, originalFileName, serverFileName;
    console.log('UploadController(), req is: ');
    //console.log(req.file);
    // We are able to access req.files.file thanks to 
    // the multiparty middleware
    if(req.files) {
        file = req.files;
        console.log('Server, UploadController()');
        console.log(file);
        //console.log(file.type);
        for(var prop in file) {
            var value = file[prop];
            if(typeof value == 'object'){
                console.log(value);
                var newFileName = path.join(__dirname, value.originalFilename);
                var oldFileName = value.path;
                console.log('original name path: ' + newFileName);
                console.log('server generated filepath: ' + oldFileName);

                //console.log('Rename to: ' + path.join(__dirname, originalFileName));
                //var newname = path.join(__dirname, originalFileName;
                // Rename server generated file name to the original name
                rename(oldFileName, newFileName);
                res.send(oldFileName);
            }
        }
    } else {
        console.log('No req.files found, has req: ' + req);
    }
    //var file = req.files.file;

}

module.exports = new UploadController();
