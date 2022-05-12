import { Todo } from "../class/todo.class";

export class TodoList {
    constructor(){
        this._tasks = [];
    }
    addTask(title){
        const task = new Todo(title);
        this._tasks.push(task);
    }
}