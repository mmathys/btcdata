var mongoose = require('mongoose');
var Price = mongoose.model('Price', { time: Date, value: Number });

mongoose.connect('mongodb://localhost/btc');

module.exports.getPrice = function() {
  return Price;
}

module.exports.savePrice = function(price) {
  var obj = new Price({time: Date.now(), value: price});
  obj.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("[saved] "+price);
    }
  });
}
