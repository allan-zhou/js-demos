var Q = require('q');
var path = require('path');
var fs = require('fs');

//------------------------------Q.nfcall------------------------------------

const fullFileName = path.resolve(__dirname, '../data/data1.json')
const result = Q.nfcall(fs.readFile, fullFileName, 'utf-8')  // 使用 Q.nfcall 返回一个 promise
result.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.stack)
})

//------------------------------Q.nfapply------------------------------------

const fullFileName2 = path.resolve(__dirname, '../data/data1.json')
const result2 = Q.nfapply(fs.readFile, [fullFileName, 'utf-8'])  // 使用 Q.nfapply 返回一个 promise
result.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err.stack)
})