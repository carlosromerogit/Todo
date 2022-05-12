import '../src/styles.css';
import { TodoList } from "../src/js/class/todo-list.class";

const todoList = new TodoList();

todoList.addTask('Aprender JavaScript')
todoList.addTask('Aprender Node')
console.log(todoList)