import '../src/styles.css';
import { TodoList } from "../src/js/class/todo-list.class";
import { renderTask } from "../src/js/components/component";
import { Todo } from './js/class/todo.class';

const newTodoInput = document.querySelector('.new-todo');
const todoListHTML = document.querySelector('.todo-list');
const filters = document.querySelector('.filters');
export const todoCount = document.querySelector('.todo-count');
export let numberCount = 0;
const todoList = new TodoList();
todoList._tasks.forEach(task =>{
    renderTask(task);
    todoCount.firstElementChild.innerText = ++numberCount;
})

newTodoInput.addEventListener('keyup', (event)=>{

    const key = event.key;
    let value = event.target.value;
    value = value.trim();

    if(key === "Enter" && value.length > 0 ){
        
        const ifExist = todoList._tasks.some( task =>{
            return task.title === value;
        })
        if(ifExist){
            return;
        }
        const task = new Todo(value);
        todoList.addTask(value);
        todoCount.firstElementChild.innerText = ++numberCount;
        
        event.target.value = '';
        renderTask(task);
    }
});

todoListHTML.addEventListener('click', (event)=>{
    const liHTML    = event.target.parentElement.parentElement;
    const localName = event.target.localName;
    const id        = event.target.parentElement.parentElement.dataset.id;

    
    switch(localName){
        case "input":
            todoList.completeTask(id);
            liHTML.classList.toggle('completed');
            const label = liHTML.children[0].firstElementChild.checked;
            (label)
                ? todoCount.firstElementChild.innerText = --numberCount
                : todoCount.firstElementChild.innerText = ++numberCount
          
            break;
        case "label":
            break;
        case "button":
            todoList.deleteTask(id);
            todoListHTML.removeChild(liHTML)
            todoCount.firstElementChild.innerText = --numberCount;
            break;
    }
})
filters.addEventListener('click', (event)=>{
    const todoListArray = Array.from(todoListHTML.children);
    const filter = event.target.textContent;
    todoListArray.forEach(li => li.classList.remove('hidden'))

    switch(filter){
        case "Pendientes":
            todoListArray.forEach(li => {
                const ifCompleted = li.classList.contains("completed");
                if(ifCompleted){
                    li.classList.add('hidden');
                }
                
            });
            break;
        case "Completados":
            todoListArray.forEach(li => {
                const ifCompleted = li.classList.contains("completed");
                if(!ifCompleted){
                    li.classList.add('hidden');
                }
            });
            break;
    }
})


