// (example) Write a function that accepts two number arguments and adds them
// together.
var add = function (numberOne, numberTwo) {
    var results = numberOne + numberTwo;
    return results;
};


// Create a function that takes in a cost and a quantity and outputs the total
// pre-tax cost for that quantity of items at the given price. For example
//
//     var preTaxTotal = totalCost(5, 5.99); // 5 items at 5.99
//     //=> 29.950000000000003
var totalCost = function (quanity, cost) {
    var results = cost * quanity;
    
    return results;
};


// Write a function that takes a rank and a suit as input, and returns a string
// representation of a card. For example, it should behave as follows
//
//     cardString("ace", "spades");
//     //=> ace of spades
//
//     cardString("queen", "hearts");
//     //=> queen of hearts
var cardString = function (rank,suit) {
    var toCardString = rank + " of " + suit;
    return toCardString;
};


// Write a function called `openTag` that accepts a tag name and returns an
// opening HTML tag with that tag name. For example,
//
//     openTag("p");
//     //=> <p>
//
//     openTag("div");
//     //=> <div>
var openTag = function (tag) {
    var open = "<" + tag + ">";
    return open;
};


// Similarly, write a function called `closingTag` that returns the closing HTML tag
// with that name.
//
//     closeTag("p");
//     //=> </p>
//
//     closeTag("div");
//     //=> </div>
var closeTag = function (tag) {
    var close = "</" + tag + ">" ;
    return close;
};


// Write a function called `toTagString` that accepts two inputs: a tag name,
// and the string content, and returns the content tagged with the specified
// string.  For example:
//
//     toTagString("li", "list item 1");
//     //=> <li>list item 1</li>
//
//     // the 'em' tag is for 'emphasis'
//     toTagString("em", "this is important stuff");
//     //=> <em>this is important stuff</em>
//
// Although I won't be testing for this, your code should re-use the functions that
// you created in the previous section.
var toTagString = function (tag,content) {
    var getOpenTag = openTag(tag);
    var getCloseTag = closeTag(tag);
    
    var htmlElement = getOpenTag + content + getCloseTag;
    
    return htmlElement;
};
