const quotes = [
    {
        quote: "A1 is quote example",
        author: "Walt Disney1"
    },
    {
        quote: "B2 is quote example",
        author: "Walt Disney2"
    },
    {
        quote: "C3 is quote example",
        author: "Walt Disney3"
    },
    {
        quote: "D4 is quote example",
        author: "Walt Disney4"
    },
    {
        quote: "E5 is quote example",
        author: "Walt Disney5"
    },
    {
        quote: "F6 is quote example",
        author: "Walt Disney6"
    },
    {
        quote: "G7 is quote example",
        author: "Walt Disney7"
    },
    {
        quote: "H8 is quote example",
        author: "Walt Disney8"
    },
    {
        quote: "I9 is quote example",
        author: "Walt Disney9"
    },
    {
        quote: "J10 is quote example",
        author: "Walt Disney10"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;