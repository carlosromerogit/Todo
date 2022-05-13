import '../src/styles.css';
import { TodoList } from "../src/js/class/todo-list.class";
import { renderList, renderTask } from "../src/js/components/component";
import { Todo } from './js/class/todo.class';

const newTodoInput = document.querySelector('.new-todo');
const todoList = new TodoList();

newTodoInput.addEventListener('keyup', (event)=>{

    const key = event.key;
    let value = event.target.value;

    if(key === "Enter" && value.length > 0 ){
        
        const ifExist = todoList._tasks.some( task =>{
            return task.title === value;
        })
        if(ifExist){
            return;
        }
        const task = new Todo(value);
        todoList.addTask(value);
        
        event.target.value = '';
        renderTask(task);
    }
})