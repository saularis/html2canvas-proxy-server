var proxy = require('html2canvas-proxy');
var express = require('express');

var app = express();
app.use('/', proxy());

app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:3001`);
});