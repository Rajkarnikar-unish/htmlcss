// DOM Manipulation

// const heading = document.querySelector('#main-heading');

// heading.style.color = 'red';

// console.log(heading);

// const listItems = document.querySelectorAll('.list-items');

// // listItems.style.fontSize = '40px';

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '4rem';
// }

// console.log(listItems);

//Creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding elements 
ul.append(li);

//Modifying texts

li.innerText = 'X-Men';

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

//Modifying attributes & classes
li.setAttribute('id', 'main-heading')
//li.className = 'list-items';
li.removeAttribute('id');

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));