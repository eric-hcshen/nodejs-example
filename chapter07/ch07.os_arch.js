/**
 * Created by king on 15-4-15.
 *
 * ch07.os_arch.js
 */
console.info("------   OS arch()   ------");
console.info();
var os = require('os');
var platform = os.platform();
console.info('操作系統平臺: ' + platform);
var arch = os.arch();
console.info('操作系統架構: ' + arch);
console.info();
console.info("------   OS arch()   ------");