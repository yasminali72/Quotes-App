var quotes=[

{
    text:'“Be yourself; everyone else is already taken.”',
    author:'-Oscar Wilde'
},

{
    text:"“You only live once, but if you do it right, once is enough.”",
    author:'-Mae West'
},

{
    text:"“Life isn't about finding yourself. Life is about creating yourself.”",
    author:'-George Bernard Shaw'
},

{
    text:'“So many books, so little time.”',
    author:'-Frank Zappa'
},
{
    text:"“If you tell the truth, you don't have to remember anything.”",
    author:'-Mark Twain'
},
{
    text:'“A room without books is like a body without a soul.”',
    author:'-Marcus Tullius Cicero'
},

{
    text:"“Do not take life too seriously. You will not get out alive.”",
    author:'-Elbert Hubbard'
},

{
    text:"“All you need is love. But a little chocolate now and then doesn't hurt.”",
    author:'-Charles M. Schulz'
}





];



var availableQuotes =[...quotes]; 
function generateQuote() {
    if (availableQuotes.length === 0) {
        availableQuotes = [...quotes]; 
    }
    var randomIndex = Math.floor(Math.random() * availableQuotes.length);
    var quote = availableQuotes.splice(randomIndex, 1)[0]; 
    document.getElementById('quote-text').innerText = quote.text;
    document.getElementById('author').innerText = `-${quote.author}`;
}
