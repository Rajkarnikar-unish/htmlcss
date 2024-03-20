// Variables

const addTask = document.getElementById('add-task');

const taskContainer = document.getElementById('task-container');

const inputTask = document.getElementById('input-task');

const inputContainer = document.getElementById('input-container');

addTask.addEventListener('click', function () {
    let task = document.createElement('div');

    task.classList.add('task');

    let li = document.createElement('li');

    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa fa-solid fa-check"></i>';
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    let messageBox = document.getElementById('message-box');

    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.setAttribute('id', 'message-box');
        let message = document.createElement('p');
        message.innerText = "Please Enter a Task";
        messageBox.appendChild(message);
    }

    if (inputTask.value === "") {
        messageBox.style.display = 'inline';
        inputContainer.appendChild(messageBox);
    } else {
        messageBox.style.display = 'none';
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkBtn.addEventListener('click', function () {
        checkBtn.parentElement.style.textDecoration = 'line-through';
    });

    deleteBtn.addEventListener('click', function (e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    });

}); 