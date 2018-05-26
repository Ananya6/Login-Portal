const express = require('express');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const Rout=express.Router({
  'strict':true,
  'mergeParams':true,
  'caseSensitive':true,
});


Rout.use(bodyParser.urlencoded({ extended: false }));
Rout.use(morgan('dev'));
Rout.route('/')
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next)=>{

  })
.post((req,res,next)=>{

res.send('Username is: '+req.body.usname);
})
.put((req,res,next)=>{

});


module.exports=Rout;
