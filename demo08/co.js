var co = require('co');

co(function* () {
    const a = yield { a: 1 };
    console.log('a', a)  // { a: 1 }
    const b = yield { b: 2 };
    console.log('b', b)  // { b: 2 }
    const c = yield { c: 3 };
    console.log('c', c)  // { c: 3 } 
});
