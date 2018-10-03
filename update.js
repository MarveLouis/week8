module.exports = function(app, db){

  var myquery = {'description':'3 items'};
  var newvalues = { $set: {type: "UPDATE", description: "UPDATE" } };
  db.collection("products").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("Item 3 updated");
  });

  db.collection("products").find({}).toArray(function(err, data) {
    if (err) throw err;
    console.log("Find all items");
    console.log(data);
  });
}
