"use strict";
var btc = require('./btc')

var intervalTime = 20*1000;
console.log("saving mean bitcoin price every "+(intervalTime/1000)+" seconds. starting now...")

var interval = setInterval(btc.getAndSavePrice, intervalTime);
