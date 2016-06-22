/**
 *
 * Initial js-file to run server
 * @author thomasmundt
 * created on 25.05.16.
 *
 *
 **/

var express = require('express'),
    app = express(),
    path = require('path'),
    multipart = require('connect-multiparty'),
    bodyParser = require('body-parser')
    // multer = require('multer'),
    // upload = multer({ dest: 'uploads/' })
    ;

var port = process.env.PORT || 3333;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// configure public assets folder
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

// app.use(multer({
//
//     dest: './uploads/'
//
// }));

// Routes
require('./app/routes')(app);


// start the server
app.listen(port);
console.log('Magic happens on http://localhost:' + port);


// expose app
exports = module.exports = app;
