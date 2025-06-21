document.addEventListener('DOMContentLoaded', () => {
    // select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // function  add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // create remove btn
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // ddd remove functionality
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // append btn to list item and list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // clear the input field
        taskInput.value = "";
    }

    // add task on btn click
    addButton.addEventListener('click', addTask);

    // add task on pressing enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
