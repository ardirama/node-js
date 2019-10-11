var fs = require('fs');

var data = fs.readFileSync('blocking.txt');
console.log(data.toString());
console.log("- Program Selesai..");