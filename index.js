
let quotes = [];
fetch("snippets/press-quotes.txt").then(response => response.text()).then(response => {
    // response contains a list of quotes surrounded by ' and seperated by commas & new lines
    // this cuts off the quotes, commas, and new lines and converts it into an array
    quotes = response.split("\n").map(x=>x.slice(1, x.length - 2));

    let pressQuote = document.getElementById("press-quote");
    let quote = quotes[Math.floor(Math.random() * quotes.length)].split(" — ");
    pressQuote.textContent = `“${quote[0]}” - ${quote[1]}`;
});

/*
let quotes = ["NAPS is by far the most significant cultural force of the decade. — New York Times",
    "These days sleeping at your desk is not just acceptable, it’s encouraged. — The Atlantic",
    "NAPS has changed the way people think about sleep, on a grand scale. — Washington Post",
    "Happiness increased 200% since NAPS began promoting siestas. — National Science Review",
    "NAPS has ushered in a new era of sleep. — USA Today",
    "Not surprisingly, more siestas means more productivity. — Wall Street Journal",
    "NAPS is doing the hard work of helping people get the rest they need. — U.S. News"
];
let pressQuote = document.getElementById("press-quote");
let quote = quotes[Math.floor(Math.random() * quotes.length)].split(" — ");
pressQuote.textContent = `“${quote[0]}” - ${quote[1]}`;
*/