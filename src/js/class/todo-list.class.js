import { Todo } from "../class/todo.class";

export class TodoList {
    constructor(){
        this.getLocalStorage();
    }
    addTask(title){
        const task = new Todo(title);
        this._tasks.push(task);
        this.setToLocalStorage();
    }
    completeTask(id){
        this._tasks.forEach(task =>{
            if(task.id == id){
                task.completed = !task.completed;
                this.setToLocalStorage()
            }
        })
    }
    deleteTask(id){
        this._tasks = this._tasks.filter(task => task.id != id);
        this.setToLocalStorage();
    }
    deleteCompletedTasks(){
        this._tasks = this._tasks.filter( task => !task.completed )
        console.log(this._tasks)
        this.setToLocalStorage();
    }
    setToLocalStorage(){
        localStorage.setItem('tasks', JSON.stringify( this._tasks ))
    }
    getLocalStorage(){
       this._tasks = (localStorage.getItem('tasks'))
                        ? JSON.parse( localStorage.getItem('tasks'))
                        : [];
    }
}