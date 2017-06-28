let [...iterableObj] = [1, 3, 5, 7, 9];
console.log(iterableObj);


function myFunction(x, y, z) {
    return x + y + z;
}
var args = [0, 1, 2];
console.log(myFunction.apply(undefined, args));
console.log(myFunction(...args));