/**
 * Created by KING on 2015/1/6.
 *
 * ch01.stderr-file.js
 */
var fs = require('fs');
var file = 'not-found.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function(err, data) {
    if(err) {
        console.error("error - \n %s", err);
        console.log(err.errno);
        console.warn("warn - \n %s", err);
    } else {
        console.log(data);
    }
});