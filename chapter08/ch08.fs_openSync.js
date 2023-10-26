/**
 * Created by king on 15-4-20.
 *
 * ch08.fs_openSync.js
 */
console.info("------   fs openSync()   ------");
console.info();
var exec = require('child_process').exec;   // TODO: 引入child_process模組
var child_pre = exec('cat txt/openSync.txt',
    function (error, stdout, stderr) {
        console.info('cat txt/openSync.txt stdout: ');
        console.log(stdout);   // TODO: 列印輸出 stdout
        console.log(stderr);   // TODO: 列印輸出 stderr
    });
console.info();
var fs = require('fs'); // TODO: 引入檔案系統模組
var fd = fs.openSync('txt/openSync.txt', 'a');  // TODO: 打開檔案（同步方式）
console.info("檔案描述表: " + fd);
console.log('fs.openSync() Done.');
console.info();
fs.closeSync(fd);
console.info("檔案描述表: " + fd);
console.log('fs.closeSync() Done.');
console.info();
