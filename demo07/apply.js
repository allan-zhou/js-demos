//-----------------------------appy---------------------------------------
var numbers = [5, 6, 2];
console.log(Math.max(5, 6, 2));                          //正常写法
console.log(Math.max(numbers[0],numbers[1],numbers[2])); //正常写法
console.log(Math.max.apply(null,numbers));               //使用apply方法
console.log(Math.max(...numbers));                       //使用spread operator

//-----------------------------call---------------------------------------
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price); 
  this.category = 'food';
}

//等同于
// function Food(name, price) { 
//     this.name = name;
//     this.price = price;
//     this.category = 'food'; 
// }

let bread = new Food('味多美',20);

console.log(bread);
