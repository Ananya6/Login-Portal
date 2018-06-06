const express = require('express');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const Rout=express.Router({
  'strict':true,
  'mergeParams':true,
  'caseSensitive':true,
});

const mongoose = require('mongoose');
const details=require('./models/LoginInfo');
Rout.use(bodyParser.json());
Rout.use(bodyParser.urlencoded({ extended: true }));
Rout.use(morgan('dev'));
Rout.route('/SignIn')
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next)=>{

  })
.post((req,res,next)=>{
 var user=req.body.usnameI;
 var pwd=req.body.pswI;
 console.log(user);
 console.log(pwd);
  details.find({UserName:user})
 .then((doc)=>{
   res.json(doc);
   if(doc.UserName===user){
     if(doc.Password===pwd){
       res.end('Logged into Successfully');
     }
   }
   else{
     res.end('This username doesnt exist');
   }
 }).catch((err)=>next(err));

})

Rout.route('/SignUp')
.all((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next)=>{

  })
.post((req,res,next)=>{
 
console.log(req.body.UserName);
console.log(req.body.Password);

 details.create(req.body)
 .then((userdetails)=>{
   console.log('New User Added');
   res.StatusCode=200;
   res.setHeader('Content-Type','application/json');
   res.json(userdetails);
 },(err)=>next(err))
 .catch((err)=>next(err));
})


module.exports=Rout;
