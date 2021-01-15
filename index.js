var https = require("https");
var fs = require("fs");
var proxy = require('html2canvas-proxy');
var express = require('express');
var helmet = require("helmet");

const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/dev.xmock.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/dev.xmock.com/chain.pem"),
  };

var app = express();
app.use(helmet());
app.use('/', proxy());

app.listen(3000);

https.createServer(options, app).listen(3001);