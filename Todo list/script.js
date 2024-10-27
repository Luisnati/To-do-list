document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('input-box');
    const button = document.getElementById('add-btn');
    const todoList = document.getElementById('list-container');

    // Add new todo item
    button.addEventListener('click', function () {
        const todoText = todoInput.value.trim();

        if (todoText !== "") {
            const li = document.createElement('li');
            li.textContent = todoText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            // Mark todo as complete
            li.addEventListener('click', function () {
                li.classList.toggle('checked');
            });

            // Remove todo item
            removeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                todoList.removeChild(li);
            });

            li.appendChild(removeBtn);
            todoList.appendChild(li);

            // Clear input
            todoInput.value = '';
        }
    });

    // Add task using Enter key
    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});
