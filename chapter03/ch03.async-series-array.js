/**
 * Created by king on 15-2-23.
 *
 * ch03.asyn-series-array.js
 */
console.info('------   Node.js非同步程式設計: Async series   ------');
console.info();
var async = require('async');   // TODO: 引用'async'包
/**
 * TODO: 使用series函數方法
 */
async.series([
    function(callback) {
        callback(null, 'hello');
    },
    function(callback) {
        callback(null, 'async');
    },
    function(callback) {
        callback(null, 'series');
    }
],function(err, results) {
    console.log(results);
});
console.info();
console.info('------   Node.js非同步程式設計: Async series   ------');