const url = 'https://dummyjson.com/quotes';

fetch(url)
    .then(response => response.json())
    .then(data => {
        let quotes = Array.from(data.quotes);
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        console.log(randomQuote);
        document.querySelector('.quote').textContent = randomQuote.quote;
        document.querySelector('.author').textContent = randomQuote.author;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
