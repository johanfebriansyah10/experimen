document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTasks(tasks)

    addTaskBtn.addEventListener("click", () => {
        let taskText = todoInput.value.trim();
        if (todoInput === "") return;
        let newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        tasks.push(newTask)
        saveTodo();
        renderTasks(newTask);
        todoInput.value = "";
    })

    function renderTasks(tasks) {
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.setAttribute('data-id', task.id);
            li.style.cursor = "pointer";
            if (task.completed) li.classList.add("completed");
            li.innerHTML = `
            <span>${task.text}</span>
            <button>Delete</button>
            `;
            todoList.appendChild(li)
            li.addEventListener("click", (e) => {
                if (e.target.tagName === 'BUTTON') return;
                task.completed = !task.completed;
                li.classList.toggle("completed")
                saveTodo()
            })

            li.querySelector('button').addEventListener("click", (e) => {
                e.stopPropagation();
                tasks = tasks.filter(t => t.id !== task.id)
                li.remove();
                saveTodo()
            })
        });
    }

    function saveTodo() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})
