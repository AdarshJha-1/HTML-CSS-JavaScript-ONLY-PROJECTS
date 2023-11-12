const task_list = document.querySelector('.task_list');
const button = document.querySelector('#add_task');
let input;
let task_count = 1;




create_new_task = () => {
    let div = document.createElement('div');
    let task_no = document.createElement('span');
    let task_name = document.createElement('span');
    let task_status = document.createElement('span');
    let complete = document.createElement('input')

    div.className ="task"
    task_no.className = "task_no"
    task_name.className = "task_name"
    task_status.className = "task_status"
    complete.id = "complete"
    complete.setAttribute("type", "checkbox")

    task_list.appendChild(div)
    div.appendChild(task_no)
    div.appendChild(task_name)
    div.appendChild(task_status)
    task_status.appendChild(complete);

    task_no.innerHTML = task_count;
    task_name.innerHTML = input;

}

button.addEventListener('click', () => {
    input = document.querySelector('#input').value;
    create_new_task();
    task_count++;
    input = document.querySelector('#input').value = "";
})

console.log(input);