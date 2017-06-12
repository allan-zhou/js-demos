//sort() 方法在适当的位置对数组的元素进行排序，并返回数组。
//默认排序顺序是根据字符串Unicode码点
//The default sort order is according to string Unicode code points.

/* 语法
 * arr.sort()
 * arr.sort(compareFunction)
 */
let result = [0, 1, 2, 5, 10, 11, 20, 100].sort();
console.log(result);

//升序排序
let result02 = [0, 1, 2, 5, 10, 11, 20, 100].sort((a, b) => {
    return a - b;
})
console.log(result02);

//降序排序
let result03 = [0, 1, 2, 5, 10, 11, 20, 100].sort((a, b) => {
    return b - a;
})
console.log(result03);

//字符串排序
let result04 = ['zhoujl', 'hello', 'apple', 'dog', 'abc'].sort();
console.log(result04);
