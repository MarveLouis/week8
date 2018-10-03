module.exports = function(app, db){

  var myobj = [
    { name: 'Item 1', price: 1, type: 'type of 1', description: '1 item'},
    { name: 'Item 2', price: 2, type: 'type of 2', description: '2 items'},
    { name: 'Item 3', price: 3, type: 'type of 3', description: '3 items'}
  ];

  db.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Items added");
    console.log(res);
  });
}
