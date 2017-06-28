//reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。


let sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc - val;
}, 0);
console.log(sum);

let sum2 = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc - val;
}, 6);
console.log(sum2);