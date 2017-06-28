var fetch = require('node-fetch');
var api = 'https://api.github.com/users/popzhou';
var api2 = 'https://api.github.com/users/github';

//------------------------基本用法-----------------------------------
var myPromise = new Promise((resolve, reject) => {
    //异步操作
    let result = false;
    if (result)
        resolve('成功');
    else
        reject('失败');
});

// then方法
myPromise.then((value) => {
    console.log(value);
}, (reason) => {
    console.log(reason);
});

//Promise 链式写法:推荐写法
myPromise.then((value) => {
    console.log(value);
}).catch((reason) => {
    console.log(reason);
});

//------------------------参数传递-----------------------------------
// 传递值
var promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise.then(function (val) {
    console.log(val); // 1
    return val + 2;
}).then(function (val) {
    console.log(val); // 3
})

// return Promise
var promise2 = new Promise(function (resolve, reject) {
    resolve(100);
});
promise.then(function (val) {
    console.log(val); // 1
    return val + 2;
}).then(function (val) {
    console.log(val); // 3
    return promise2;
}).then(function (val) {
    console.log(val); //100
});

//------------------------异常处理-----------------------------------
var promise3 = fetch(api);

myPromise.then((value) => {
    console.log('异常处理then:' + value);
}).catch((reason) => {
    console.log('异常处理catch:' + reason);
    return promise3;
}).then((val) => {
    return val.json();
}).then((data) => {
    console.log(data.login);
}).catch((err) => {
    console.log('fetch-catch-error:'+ err);
});


