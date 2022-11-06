let beststudent=prompt("studentName");
if(beststudent=="Muhammad Umer Bajwa"){
    console.log("correct answer")
}
else
console.log("not correct");

//to perform arthematic functions/operations on prompt we use
//parseint    (string to integar)
//parsefloat  (string to decimal)
//number      (string to number)

let abc =prompt("numbers to be added");

let A =parseInt(abc);//this doesnot includes decimals
let A1=A+5;
console.log(A1);

let B =parseFloat(abc);//(parsefloat and number can concatenates string like abc)
let A2=B+5;
console.log(A2);

let C =Number(abc);//(recommanded for data type=Number)
let A3=C+5;
console.log(A3);