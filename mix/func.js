//箭头函数

let func1 = () => {
    console.log('hello');
}

func1();

let func2 = a => a;
console.log(func2('hello'));

let func3 = () => 'hello';
console.log(func3());

let func4 = (a) => a;
console.log(func4('hello'));

let func5 = (a, b) => a + b;
console.log(func5(1, 1));

let func6 = n => n % 2 == 0;
console.log(func6(2));

let func7 = n => n * n;
console.log(func7(2));

let func8 = (...number) => number;
console.log(func8(1, 2, 3));