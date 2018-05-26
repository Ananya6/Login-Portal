const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const http=require('http');
const express=require('express');
const hostname='localhost';
const port=3000;
const morgan=require('morgan');

const dbopr=require('./operations');
const router =require('./router');

const url='mongodb://localhost:27017/logininfo';


const app=express();
//
app.use('/',router);
// app.use('/promotions',promoRouter);
// app.use('/promotions/:promoId',promoRouter);
// app.use('/leaders',leaderRouter);
// app.use('/leaders/:leaderId',leaderRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname+'/frontend'));
//
// MongoClient.connect(url)
//    .then((client)=>{
//       console.log('Connected Correctly');
//       const db=client.db("logininfo");
//       dbopr.insertDocument(db,{UserName:"Harry",Password:"potter"},"credentials")
//
//     .then((result)=>{
//       console.log("Inserted Document:\n ",result.ops);
//       return dbopr.findDocument(db,"credentials");
//     })
//     .then((docs)=>{
//       console.log("Found Documents: ",docs);
//       return dbopr.updateDocument(db,{UserName:"Harry"},{UserName:"Skyler"},"credentials");
//     })
//     .then((result)=>{
//            console.log("Updated Document: ", result.result);
//            return dbopr.findDocument(db,"credentials");
//     })
//     .then((result)=>{
//             console.log("Found updated dishes",result);
//             return db.dropCollection("credentials");
//     })
//     .then((res)=>{
//             console.log("Dropped Collection");
//             return client.close();
//     })
//     .catch((err)=>console.log(err));
//
// }),(err)=>console.log(err)
// .catch((err)=>console.log(err));

//const server =http.createServer(app);

app.listen(port,hostname,()=> {
  console.log(`Server is running at http://${hostname}:port${port}`);
});
//   const db=client.db("logininfo");
//   const collection=db.collection("credentials");
//   collection.insertOne({"UserName":"Mike","Password":"hiMike"},
//   (err,result)=>{
//     assert.equal(err,null);
//
//     console.log("After Insert");
//     console.log(result.ops);
//
//     collection.find({}).toArray((err,docs)=>{
//       assert.equal(err,null);
//
//       console.log("Found: \n");
//       console.log(docs);
//
//       db.dropCollection("credentials",(err,result)=>{
//         assert.equal(err,null);
//         client.close();
//       });
//     });
//   }
// );

// });
