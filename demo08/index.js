function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

let g = gen(); 
// "Generator { }"
console.log(typeof g); 
console.log(g.next());
console.log(g.next());
console.log(g.return('hello')); //直接返回
console.log(g.next());
console.log(g.next());