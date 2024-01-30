var path = require('path');
var express = require('express');
var app = express();

var folder = path.join(__dirname, 'public'); 
app.use(express.static(folder)) 


app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!');
});