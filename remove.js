module.exports = function(app, db){

  var myquery = {'description':'2 items'};
  db.collection("products").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("Item 2 deleted");
  });

  db.collection("products").find({}).toArray(function(err, data) {
    if (err) throw err;
    console.log("Find all items");
    console.log(data);
  });
}
