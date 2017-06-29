function* G() {
    const a = yield 100
    console.log('a', a)  // a aaa
    const b = yield 200
    console.log('b', b)  // b bbb
    const c = yield 300;
    console.log('c', c)  // c ccc
}
const g = G()
// console.log(g.next());      // { value: 100, done: false }
// console.log(g.next('aaa')); // { value: 200, done: false }
// console.log((g.next('bbb').value)(1)); // { value: 300, done: false }
// console.log(g.next('ccc')); // { value: undefined, done: true }

for(val of g){
  console.log(val);
}