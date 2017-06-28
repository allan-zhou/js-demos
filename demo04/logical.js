// 逻辑或 (||)
// expr1 || expr2
// 如果expr1能转换成true则返回expr1,否则返回expr2.
// 因此,在boolean环境(在if的条件判断中)中使用时, 二者操作结果中只要有一个为true,返回true;二者操作结果都为false时返回false.

let query = { name:'zhoujl'};
let params = { desc:'zhoujl'};

let result = query || params;

console.log(query);