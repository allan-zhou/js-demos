Promise 对象表示一个异步操作的最终完成（或失败）情况

# 语法
```
new Promise(
    /* executor */
    function(resolve, reject) {...}
);
```
### 参数
executor  
executor是一个带有resolve和reject两个参数的函数 。executor 函数在Promise构造函数执行时同步执行，被传递resolve和reject函数（executor 函数在Promise构造函数返回新建对象前被调用）。executor 内部通常会执行一些异步操作，一旦完成，可以调用resolve函数来将promise状态改成fulfilled，或者在发生错误时将它的状态改为rejected。