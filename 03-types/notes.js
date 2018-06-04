// your notes here!
console.log("hello world!");
console.log("this is the types section!");

var results;

// results = typeof 5;
// results = typeof "5";

// results = Math.pow(3,3);
// results = Math.round((5.99 *.09 + 5.99) * 100) / 100
// results = Math.floor(5.99 * .09 + 5.99)
// results = Math.ceil(5.99 * .09 + 5.99)
 results = Math.max(5,10,15,20);
// results = Math.min(5,10,15,20);
// results = Math.random();
// results = Math.random() * 5;
// results = Math.floor(Math.random() * 5);
// results = Math.floor(Math.random() * 100);
 
// console.log(results);
 
 /*     Arithmetic Operators
 
 
    operator    |       Operation
    a * b       |   Multipication a times b
    a / b       |   Dividion, a divided by b
    a % b       |   Remainder when a is divided by b
    a + b       |   Addition, a plus b
    a - b       |   Subtraction, a minus b
 
 */
 
 
  /*     Math Functions
 
 
    operator            |       Operation
    Math.pow(a, b)      |   calculate a power a^b
    Math.round(a)       |   round argument to the integer nearest a
    Math.floor(a)       |   smallest integer above a
    Math.ceil(a)        |   largest integer below a
    Math.max(a,b,c,...) |   largest of all arguments a,b,c,... 
    Math.min(a,b,c,...) |   smallest of all arguments a,b,c,...
    Math.random()       |   random number between 0 and 1
 
 */
 
 var celsius = 0;
 
 var fahrenheit = ((celsius * 9) / 5) + 32;
 
 //console.log(fahrenheit);
 
 var burritoPrice = 5.99;
 
 var taxRate = .09;
 
 var totalPrice = (burritoPrice * taxRate) + burritoPrice;
 
// var totalBurritoPrice = Math.round((burritoPrice * taxRate) + burritoPrice) * 100) / 100;
 var totalBurritoPrice = Math.round((burritoPrice * taxRate) + burritoPrice);
 
 //console.log(totalBurritoPrice);
 
 
 var greeting = "Hello!";
 
 greeting.toUpperCase();
 
 greeting.toLowerCase();
 
 var tweet = "hello this is a tweet lol";
 
 console.log(tweet);
 
 tweet.indexOf("tweet");
 
 tweet.slice(16);
 
 tweet.slice((16,21));
 
 tweet.length;
 
 tweet.charAt(0); //character at the index 0.
 
 tweet.charAt(tweet.length - 1)
 
   /*     String Methods
 
 
    operator               |       Operation
    str.toLowerCase()      |   return str with all lower-case letters
    str.toUpperCase()      |   return str with all upper-case letters
    str.indexOf(a)         |   first starting index of substring a or -1 if a is not found
    str.slice(a,b)         |   get a substring starting at index a ending at b-1
    str.charAt(index)      |   return the character at index
    str.length             |   return length of the string (a property, not a method)
 
 */
 
 var text = "this is a string for testing";
 
 var last3 = text.slice(text.length-3).toUpperCase();
 
 console.log(last3);
 