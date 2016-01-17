// Express 
var express = require('express');
var app = express();

// Static Folder
app.use(express.static(__dirname+'/static'));

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Server Listening
app.listen(1337);