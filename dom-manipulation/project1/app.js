//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.person');
let anime = document.querySelector('.anime');

let quotes;

(async () => {
    try {
        const response = await fetch('dataset.json');
        quotes = await response.json();
        btn.addEventListener('click', function () {
            let random = Math.floor(Math.random() * quotes.length);

            quote.innerHTML = quotes[random].quote;
            anime.innerText = quotes[random].anime;
            author.innerText = quotes[random].character;
        });
    } catch (error) {
        console.error("Error fetching quotes:", error);
        return [];
    }
})();

const text = "You listen carefully, Sena. That's the one person you definitely do not want to associate with! That one called Hiruma, he's like a demon! Once he gets his eye on you, he'll drain all the life out of you until there's nothing left but skin and bones!";

console.log(text.length);
