
export class Todo{
    constructor(title){
        this.title = title;
        this.id = new Date().getTime();
        this.completed = null;
        this.date = new Date();
    }
}