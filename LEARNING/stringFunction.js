//quotes
var a1 = "Hello\nworld";
console.log(a1);
var b2 = "Hello\'world";
console.log(b2);
var c3 = "Hello\"world";
console.log(c3);
var d4 = "Hello\\world";
console.log(d4);
var e5 = "Hello\tworld";
console.log(e5);

//String Length
var quote="Imagination is more important then Knowledge"
console.log(quote.length);

//to lowercase function
var lowerCase1= quote.toLowerCase();
console.log(lowerCase1);

//to uppercase function
var uppercase1= quote.toUpperCase();
console.log(uppercase1);

//slice function
var slice1= quote.slice(12,30);
console.log(slice1);

var slice2= quote.slice(-10,-1);
console.log(slice2);

//indexof function(to find characters from start of string)
var indexof1= quote.indexOf("more");//to skip the character to search we can use (quote.IndexOf("then",10)
console.log(indexof1);

//lastindexof function(to find characters from last of string)
var lastindexof1= quote.lastIndexOf("then");//to skip the character to search we can use (quote.lastIndexOf("then",10)
console.log(lastindexof1);

//chatAt(to search for character represention in the string)
var charAt1= quote.charAt(25);
console.log(charAt1);

//Replace function

//to replace from string
var abc="To be or not to Be";
var replace1=abc.replace(/be/g,"Get");
console.log(replace1);

//to replace case sensitive
var replace2=abc.replace(/be/i,"Get");
console.log(replace2);

//to replace both above
var replace3=abc.replace(/be/gi,"Get");
console.log(replace3);

//split function
var split1= quote.split(" ");
console.log(split1);

//other functions