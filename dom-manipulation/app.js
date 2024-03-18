// DOM Manipulation

//EVENT LISTENERS

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector('.hiddent-content');

function revealContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);

//element.addEventListeners("click", function)

// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//     alert("This is really cool.");
// };

// buttonTwo.addEventListener("click", alertBtn);

// //Mouse Over (Hover)

// const newBgColor = document.querySelector('.box-3');

// function changeBgColor() {
//     newBgColor.style.backgroundColor = 'blue';
// }

// newBgColor.addEventListener("mouseover", changeBgColor);

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
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //Adding elements
// ul.append(li);

// //Modifying texts

// li.innerText = 'X-Men';

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

// //Modifying attributes & classes

// li.classList.add('list-items')
// // li.classList.remove('list-items')

// console.log(li.classList.contains('list-items'));
// li.setAttribute('id', 'main-heading')
// //li.className = 'list-items';
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'));

//REMOVE ELEMENTS

// li.remove();


//Traverse the DOM

//Parent Node Traversal

// console.log(ul);

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

//Child Node Traversal

// console.log(ul.childNodes);

// ul.childNodes[1].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//Sibling Node Traversal
// let ul = document.querySelector('ul');


// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
