//-------------------创建symbol类型---------------------

var sym0 = Symbol();
var sym1 = Symbol('symbol1');
var sym2 = Symbol('symbol2');
var sym3 = Symbol('symbol2');

console.log(sym0);
console.log(sym1);
console.log(sym2);
console.log(sym3);
console.log(typeof sym3);
console.log(sym2 === sym3);
console.log(sym3.toString());


//-------------------Symbol.iterator---------------------
//Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环结构使用。

//用户自定义迭代器: 示例1
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
for( let val of myIterable){
    console.log(val); // 1,2,3
};
console.log([...myIterable]);  //[1, 2, 3]

console.log(typeof myIterable[Symbol.iterator]); //function
let iterator = myIterable[Symbol.iterator](); 
console.log(typeof iterator); //object
console.log(iterator.next());

//-------------------String类型，内置迭代器---------------------
let strHello = 'hello';

for(let val of strHello){
    console.log(val);//
}

let iterator2 = strHello[Symbol.iterator]();
console.log(typeof iterator2);
console.log(iterator2 + "");
console.log(iterator2.next());
console.log(iterator2.next());
console.log([...strHello]);

//-------------------Array类型，内置迭代器---------------------
var someArray = [1, 5, 7];
var someArrayEntries = someArray.entries();

console.log(someArrayEntries.toString()); ;           // "[object Array Iterator]"
console.log(someArrayEntries === someArrayEntries[Symbol.iterator]());    // true;
console.log(someArrayEntries.next()); // { value: [ 0, 1 ], done: false }
