console.log("Works");

const casual = require('casual');

const  sentence = casual.sentence;

const city = casual.city;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log("sakinys:", sentence);
console.log( "miestas:",city);
console.log( "skaicius:",Math.random());

