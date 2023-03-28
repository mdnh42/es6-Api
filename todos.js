function loadTodos()
{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data));
}
function displayTodos(todos)
{
    const todocontainer = document.getElementById('todo-container');

    for(const todo of todos)
    {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3>Title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p> ${todo.completed === true ? 'Completed': 'not Completed'}</p>

        `
        todocontainer.appendChild(todoDiv);
    }
}
loadTodos();