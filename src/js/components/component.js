const todoList = document.querySelector('.todo-list');
const clearCompleted = document.querySelector('.clear-completed')

export const renderList = (tasks = [])=>{
    const liFragment = document.createDocumentFragment();
    
    tasks.forEach(task =>{
        const li = document.createElement('li');
        const status = (task.completed)? "completed" : "false";
        li.classList.add(status);
        li.setAttribute("data-id",`${task.id}`);

        const div = document.createElement('div');
        div.classList.add('view');

        const input = document.createElement('input');
        input.classList.add('toggle');
        input.setAttribute('type', 'checkbox');
        if(task.completed){
            input.setAttribute('checked', '');
        }
        div.append(input);

        const label = document.createElement('label');
        label.innerText = task.title;
        div.append(label);

        const button = document.createElement('button');
        button.classList.add('destroy');
        div.append(button);

        const inputEdit = document.createElement('input');
        inputEdit.classList.add('edit');
        inputEdit.setAttribute('value', 'Create a TodoMVC template');


        li.append(div);
        li.append(inputEdit);
        liFragment.append(li);
    })
    todoList.append(liFragment);
}
export const renderTask = (task)=>{
    const li = document.createElement('li');
    const status = (task.completed)? "completed" : "false";
    li.classList.add(status);
    li.setAttribute("data-id",`${task.id}`);

    const div = document.createElement('div');
    div.classList.add('view');

    const input = document.createElement('input');
    input.classList.add('toggle');
    input.setAttribute('type', 'checkbox');
    if(task.completed){
        input.setAttribute('checked', '');
    }
    div.append(input);

    const label = document.createElement('label');
    label.innerText = task.title;
    div.append(label);

    const button = document.createElement('button');
    button.classList.add('destroy');
    div.append(button);

    const inputEdit = document.createElement('input');
    inputEdit.classList.add('edit');
    inputEdit.setAttribute('value', 'Create a TodoMVC template');


    li.append(div);
    li.append(inputEdit);
    todoList.append(li);
};

console.log(clearCompleted)
clearCompleted.addEventListener('click', ()=>{
const todoListArray = Array.from(todoList.children);

todoListArray.forEach(element =>{
    const completedElement = element.classList.contains('completed');
    if(completedElement){
        todoList.removeChild(element);
    }
})



});