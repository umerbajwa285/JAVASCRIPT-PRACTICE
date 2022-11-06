//TAXI SERVICE tO BE USED


let taxi=prompt("NAME OF A TAXI SERVICE");

if (taxi=="careem")
    {
    console.log("accepted");
}
else if(taxi=="uber")
{
    console.log("accepted");
}
else if(taxi=="simpletaxi")
{
    console.log("accepted");
}
else if(taxi=="Bus")
{
    console.log("accepted");
}
else {
    console.log("other transport facitities are not acceptable");
}



//GRADING OF STUDENTS

let score=prompt("score of student");

if (score>=90){
    console.log("Grade A")
    {
        if(score>=90){
            console.log("100$ REWARD")
        }
    }
}
else if(score>=80){
    console.log("Grade B");
}
else if(score>=70){
    console.log("Grade C");
}
else{
    console.log("FAIL")
}