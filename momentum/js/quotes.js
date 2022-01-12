const quotes = [
    {
        quote: "Your word is a lamp to my feet and a light for my path.",
        chapter: "Psalms 119:105"
    },
    {
        quote: "For sin shall not be your master, because you are not under law, but under grace. ",
        chapter: "Romans 6:14"
    },
    {
        quote: "Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit of life set me free from the law of sin and death.",
        chapter: "Romans 8:1-2"
    },
    {
        quote: "For the kingdom of God is not a matter of eating and drinking, but of righteousness, peace and joy in the Holy Spirit,",
        chapter: "Romans 14:17"
    },
    {
        quote: "E5 is quote example",
        chapter: "Example5"
    },
    {
        quote: "F6 is quote example",
        chapter: "Example6"
    },
    {
        quote: "G7 is quote example",
        chapter: "Example7"
    },
    {
        quote: "H8 is quote example",
        chapter: "Example8"
    },
    {
        quote: "I9 is quote example",
        chapter: "Example9"
    },
    {
        quote: "J10 is quote example",
        chapter: "Example10"
    }
]
 
const quote = document.querySelector("#quote span:first-child");
const chapter = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
chapter.innerText = todaysQuote.chapter;