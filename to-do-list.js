document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.querySelector('#task');
    const taskList = document.querySelector('#task-list');
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => li.remove());
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
