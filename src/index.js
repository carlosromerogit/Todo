import '../src/styles.css';
import { TodoList } from "../src/js/class/todo-list.class";
import { renderList } from "../src/js/components/component";

const todoList = new TodoList();

todoList.addTask('Aprender JavaScript')
todoList.addTask('Aprender Node')


renderList(todoList._tasks);