'use strict';

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('infoblad', ['infoblad']); // letar fram databas vi vill ta data ifrån
var bodyParser = require('body-parser');
var router = express.Router();


app.use(express.static(__dirname + "/"));// hämtar statiska filer..html,css,img
app.use(bodyParser.json());



app.get('localhost:8100/ionic', function(req,res){ // ger req till route
	db.infoblad.find(function(err,docs){
    console.log("data");
    res.send(docs)
		res.json(docs);
  });// hämtar data från db.infoblad

		});
