function* gen(x) {
    try {
        console.log(x);
        var y = yield x + 2;
    } catch (e) {
        console.log(`error:${e}`);
    }
    return y;
}

console.log(`实例化函数`);
var g = gen(1);
console.log(`开始执行next()`);
g.next();
g.throw('出错了!我要被传入catch函数');
// 出错了