var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var db = require('./db');
var xbtc = new XMLHttpRequest();

module.exports.getAndSavePrice = function() {
  xbtc.open('GET', 'https://api.bitcoinaverage.com/ticker/global/USD/', true);
  xbtc.onreadystatechange = function(){
  	if(xbtc.readyState == 4){
  		var ticker = JSON.parse(xbtc.responseText);
  		var price = ticker.last;
      db.savePrice(price);
  	}
  };
  xbtc.send();
}
