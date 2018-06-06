const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const http=require('http');
const express=require('express');
const hostname='localhost';
const port=3000;
const morgan=require('morgan');
//
// const dbopr=require('./operations');
const rout =require('./router');

const mongoose = require('mongoose');
mongoose.Promise=require('bluebird');

const url='mongodb://localhost:27017/logindetails';

mongoose.connect(url,(err)=>{
  if(err) throw err;
  else {
    console.log("Connected successfully");
  }
});


const app=express();

app.use('/',rout);

app.use(morgan('dev'));
app.use(express.static(__dirname+'/client'));

app.listen(port,hostname,()=> {
  console.log(`Server is running at http://${hostname}:port${port}`);
});
//
// MongoClient.connect(url)
//    .then((client)=>{
//      const db=client.db("LoginInfo");
//      var UserName=router.UserName;
//      var Password=router.Password;
//      return dbopr.findDoc(db,"credentials",UserName);
//    })
//    .then((docs)=>{
//      if(docs.password==Password){
//        console.log("Successfully Logged In");
//      }
//    })
//
//
