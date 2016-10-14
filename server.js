var express = require('express');
var multer  = require('multer');
var rmdir = require('rmdir');
var path = require('path');
var fs = require('fs');
var upload = multer({ dest: 'uploads/' });
var app = express();

app.set('json spaces', 4);

app.post('/upload',  upload.single('fileToUpload'), function(req, res, next) {
  if (req.file) {
    return res.json({"File Size" : req.file.size});
  }
  res.end('Missing file');
});

app.get('/*', function(req, res) {
    rmdir(__dirname + '/uploads/', function () {
      fs.mkdir(__dirname + '/uploads/');
    });
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080, function () {
    console.log('File metadata app is listening');
});