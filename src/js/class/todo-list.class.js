import { Todo } from "../class/todo.class";

export class TodoList {
    constructor(){
        this._tasks = [];
    }
    addTask(title){
        const task = new Todo(title);
        this._tasks.push(task);
    }
    completeTask(id){
        this._tasks.forEach(task =>{
            if(task.id == id){
                task.completed = !task.completed;
            }
        })
    }
}