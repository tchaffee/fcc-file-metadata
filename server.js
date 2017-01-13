var express = require('express');
var app = express();

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/get-file-size', upload.single('uploadedFile'), function (req, res, next) {
  res.send({
    size: req.file.size
  });
});

app.listen(8080, function () {
  console.log('App listening on port 8080.');
});