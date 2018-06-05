// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (number) {
    return number % 3 === 0;
};


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (temperature) {
     return ((temperature * 9) / 5) + 32;
};

var fahrToCels = function (temperature) {
    return ((temperature - 32) * 5) / 9;
};


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (number) {
    return Math.floor(Math.random() * number);
};


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (numberOne, numberTwo) {
    return Math.floor((Math.random() * (numberTwo - numberOne)) + numberOne);
};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (suit) {
    var result =  suit.toLowerCase() === "hearts" || suit.toLowerCase() === "clubs" || suit.toLowerCase() === "diamonds" || suit.toLowerCase() === "spades";
    return result;
};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (rank) {
    var result = rank.toLowerCase() === "two" || rank.toLowerCase() === "three" || rank.toLowerCase() === "four" || rank.toLowerCase() === "five" || rank.toLowerCase() === "six" ||
        rank.toLowerCase() === "seven" || rank.toLowerCase() === "eight" || rank.toLowerCase() === "nine" || rank.toLowerCase() === "ten" || rank.toLowerCase() === "jack" || 
        rank.toLowerCase() === "queen" || rank.toLowerCase() === "king" || rank.toLowerCase() === "ace"
        
        return result;
};


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (rank, suit) {
    var result = isRank(rank) && isSuit(suit);
    return result;
};


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (string) {
    var result = string.charAt(0).toLowerCase() > string.charAt(0);
    return result;
};


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (htmlString) {
    return htmlString.substring(htmlString.indexOf(">") + 1,htmlString.indexOf("</"))
};


// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (htmlElement) {
    var indexOfOpenOpen = htmlElement.indexOf("<");
    var indexOfOpenClose = htmlElement.indexOf(">");
    var indexOfCloseOpen = htmlElement.indexOf("</");
    var indexOfCloseClose = htmlElement.lastIndexOf(">");
    
    var openString = htmlElement.substring(indexOfOpenOpen + 1,indexOfOpenClose);
    var closeString = htmlElement.substring(indexOfCloseOpen + 2, indexOfCloseClose);
    
   var result = indexOfOpenOpen === 0 && indexOfOpenClose > -1 && indexOfCloseOpen > -1 && indexOfCloseClose === htmlElement.length - 1 && openString === closeString;
   
  
    // console.log(indexOfOpenOpen);
    // console.log(indexOfOpenClose);
    // console.log(indexOfCloseOpen);
    // console.log(indexOfCloseClose);
    // console.log(openString);
    // console.log(closeString);
   
   return result;
};

//console.log(isHTMLElement("this <div>is not valid</div>"));