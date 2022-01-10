const quotes = [
    {
        quote: "A1 is quote example",
        author: "Example1"
    },
    {
        quote: "B2 is quote example",
        author: "Example2"
    },
    {
        quote: "C3 is quote example",
        author: "Example3"
    },
    {
        quote: "D4 is quote example",
        author: "Example4"
    },
    {
        quote: "E5 is quote example",
        author: "Example5"
    },
    {
        quote: "F6 is quote example",
        author: "Example6"
    },
    {
        quote: "G7 is quote example",
        author: "Example7"
    },
    {
        quote: "H8 is quote example",
        author: "Example8"
    },
    {
        quote: "I9 is quote example",
        author: "Example9"
    },
    {
        quote: "J10 is quote example",
        author: "Example10"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;