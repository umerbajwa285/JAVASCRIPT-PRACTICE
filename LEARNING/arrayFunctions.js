//Splice function
var sports=["cricket","football","volleyball"]
sports.splice(1,2,"baseball","westling");//added on index "1" and replace "2" means index 1&2 is replaced
console.log(sports);

// ['cricket', 'baseball', 'westling']

//slice function(extract index'es from array and put it into another array)
var sport=["cricket","football","volleyball","baseball","westling"]
//for slice we have to create another variable to get answer in another array
//like "sport1_2" & index "3" will be exclusive.

var sport1_2 =sport.slice(1,3);
console.log(sport1_2);

//other functions