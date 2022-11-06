//creating Arrays

let foods =["pizza","burger","snacks"];
console.log(foods);

//accessing Arrays

foods[0];
foods[1];
foods[2];
foods[3];
console.log(foods);
console.log(foods[3]);//undefined

//add or updating Arrays
//random access or add and remove randomly

foods[3]="Grapes"//add index or element into array
console.log(foods);

foods[3]="Apples"//updating array
console.log(foods);

//Length Property

console.log(foods.length);// to find out "elements" in array not the "index"


//Stack(Last in First out)
//push function(for adding data from end)
var fruits=[];
fruits.push("banana","apple");
fruits.push("grapes");
console.log(fruits);

//pop function(for removing data from end)
fruits.pop();
console.log(fruits);


//Queue function(First in First out)
//push function(for adding data from end)
var fruits=[];
fruits.push("banana","apple");
fruits.push("grapes");
console.log(fruits);

//shift function(for removing data from first)
fruits.shift();
console.log(fruits);

//unshift function(for adding data from first)
fruits.unshift("pear");
console.log(fruits);
