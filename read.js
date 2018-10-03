module.exports = function(app, db){

  db.collection("products").find({}).toArray(function(err, data) {
    if (err) throw err;
    console.log("Find all items");
    console.log(data);
  });
}
