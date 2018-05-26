const assert = require('assert');

var insDoc=(db,document,collection,callback)=>{
  var coll=db.collection(collection);
  return coll.insert(document);
};

var findDoc=(db,collection,callback)=>{
  var coll=db.collection(collection);
  return coll.find({}).toArray();
};

var removeDoc=(db,document,collection,callback)=>{
  var coll=db.collection(collection);
  return coll.deleteOne(document);

};
exports.updateDocument=(db,document,update,collection,callback)=>{
    var coll=db.collection(collection);
    return coll.updateOne(document,{$set:update},null);
    // coll.updateOne(document,{ $set:update },null, (err,result)=>{
    //   assert.equal(err,null);
    //   callback(result);
    // });
};


module.exports.insertDocument=insDoc;
module.exports.findDocument=findDoc;
module.exports.removeDocument=removeDoc;
