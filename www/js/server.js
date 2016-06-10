'use strict';

var express = require('express');
//var cors = require('cors');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('infoblad', ['infoblad']); // letar fram databas vi vill ta data ifrån
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');

//app.use(express.static(path.join(__dirname, "www")));// hämtar statiska filer..html,css,img
app.use(bodyParser.json());
//app.use(cors());



app.use(function(req, res, next) {
   // Website you wish to allow to connect
   res.set('Access-Control-Allow-Origin', '*');
   // Request methods you wish to allow
   res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
   // Request headers you wish to allow
   res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
   next();
});



//app.all("/*", function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  console.log("??");
//  next();
//});


app.get('/infoblad',function(req,res){ // ger req till route
  console.log("i recive the request");
	db.infoblad.find(function(err,docs){
    console.log(docs);
  res.json(docs);
  //res.render(docs);


  });// hämtar data från db.infoblad

		});

    app.put('/infoblad/:id', function(req,res){
    	var id = req.params.id;
      console.log(1)
    	db.cl.findAndModify({query: {_id: mongojs.ObjectId(id)},// väljer object det vi vill ändra
    		update: {$set: {
                header: req.body.header,
    						infotext: req.body.infotext}},
    		new: true}, function(err, doc){
    			res.json(docs);
          console.log(docs)
    			});
    	});
//module.exports = router;
app.listen(8000,(err)=>{
  if(err){
    console.log('Fail');
  }
  else {
    console.log('Connect at localhost:8000');
  }
});
