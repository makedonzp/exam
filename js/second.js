const input = document.querySelector('.wrapper_input');
const btn = document.querySelector('.btn_wrapper');
const output = document.querySelector('.out');


let tasks;


if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
} else {
    tasks = [];
}

for (let i = 0; i < tasks.length; i++) {
    output.innerHTML += `<div class="toDo_Item">
    <div class="description">${tasks[i]}</div>
    <div class="buttons">
        <input type="checkbox" class="btn_complete" name="" id="">
        <button class="btn_delete">Удалить</button>
    </div>
</div>`
}



const btn_delete = document.querySelectorAll('.btn_delete');

for (let i = 0; i < btn_delete.length; i++) {
    btn_delete[i].addEventListener('click', () => {
        deleteTasks();
    })
}


btn.addEventListener('click', () => {
    tasks.push(input.value);
    let strTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', strTasks);
    drawTasks();
    input.value = '';
});


function drawTasks() {
    output.innerHTML += `<div class="toDo_Item">
    <div class="description">${input.value}</div>
    <div class="buttons">
        <input onclick = "toggleTasks();" type="checkbox" class="btn_complete" name="" id="">
        <button onclick = "deleteTasks();" class="btn_delete">Удалить</button>
    </div>
</div>`;
    const btn_delete = document.querySelectorAll('.btn_delete');
    for (let i = 0; i < btn_delete.length; i++) {
        btn_delete[i].addEventListener('click', () => {

        })
    }
}



