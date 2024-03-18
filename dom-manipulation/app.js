// DOM Manipulation

//EVENT LISTENERS

document.querySelector('#sports').addEventListener
    ('click', function (e) {
        console.log(e.target.getAttribute('id') + ' is clicked');

        const target = e.target;

        let clicked = false;

        if (target.matches('li')) {
            target.style.textDecoration = 'line-through';
        } else {
            target.style.backgroundColor = 'transparent';
        }
    });

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');
newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);