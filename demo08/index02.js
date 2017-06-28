function* gen(x) {
    let y1 = yield x + 1;
    console.log(`y1:${y1}`);

    let y2 = yield y1 + 2;
    console.log(`y2:${y2}`);
    
    let y3 = yield y2 + 3;
    console.log(`y3:${y3}`);
}

let g = gen(10);
// "Generator { }"
console.log('第1次next');
console.log(g.next());

console.log('第2次next');

let next2 = g.next(100);
console.log(next2);

console.log('第3次next');
//console.log(g.next());  如果直接使用g.next(),则其值为{{ value: NaN, done: false }}，变量y2：undefined
console.log(g.next(next2.value));

console.log('第4次next');
console.log(g.next());