const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats"
];

const usedIndexes = new Set(); //literal set
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    } //for set use size, for arr use length

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        if (usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        //sets what's in between the openning and closing paragraph tags in the html
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
        
    }
}