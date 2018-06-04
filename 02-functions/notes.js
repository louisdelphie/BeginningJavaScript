//console.log("Hello World!");
//console.log("This is another statement");
//console.log("testing");
//console.log("Another Test for the html file");

// greet("Louis");
//=> "Hello, Louis!"

var greet = function(name){
    return "Hello, " + name;
};

var greetingForLouis = greet("Louis");
var greetingForPepper = greet("Pepper");

//console.log(greetingForPepper);

var toCardString = function(rank,suit){
    var cardString = rank + " of " + suit;
    return cardString;
};

var twoOfDiamonds = toCardString("two","diamonds");
var queen = toCardString("queen","hearts");


//console.log(twoOfDiamonds);
//console.log(queen);

console.log(toCardString("ace","spades"));

// makeHtmlParagraph("hello world");
// => <p>hello world</p>

var makeHtmlParagraph = function (content){
    var openParagraphTag = "<p>";
    var closeedParagraphTag = "</p>";
    
    var htmlParagraph = openParagraphTag + content + closeedParagraphTag;
    return htmlParagraph;
}

//console.log(makeHtmlParagraph("This is a Paragraph"));
