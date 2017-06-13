//JSON 对象包含用于解析 JavaScript Object Notation  (JSON) 的方法，并将值转换为JSON。
//它不能被调用或者作为构造函数，除了它的两个方法属性，它本身并没有有趣的功能。

//JSON.parse() :将一个字符串解析为JSON，可选地转换生成的值及其属性，并返回值。
//JSON.stringify() : 返回与指定值相对应的一个JSON字符串，可选地仅包含某些属性或以用户定义的方式替换属性值。

let user = {name:'zhoujl', city:'beijing'};
JSON.stringify(user);

console.log(user);

