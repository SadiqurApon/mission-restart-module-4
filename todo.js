const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTodo(data));
};

// completed: false
// id: 192
// title: "ut quas possimus exercitationem sint voluptates"
// userId: 10

const displayTodo = (todos) => {
    // 1. Get a container and empty this container
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    todos.forEach((todo) => {
        console.log(todo);
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class="todo-card">
        <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
        <h3>${todo.title}</h3>
        </div>
        `
        todoContainer.append(todoCard);
    });
};

loadTodo();