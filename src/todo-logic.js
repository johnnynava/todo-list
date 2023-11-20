class Task {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
        this.id = Math.floor(Math.random()*1000000);  
    }
    toggleComplete(){
        switch(this.complete){
            case true:
                this.complete = false;
                break;
            case false:
                this.complete = true;
                break;
        }
    }
    changeTitle(title){
        this.title = title;
    }
    changeDescription(description){
        this.description = description;
    }
    changeDueDate(dueDate){
        this.dueDate = dueDate;
    }
    changePriority(priority){
        this.priority = priority;
    }
}

class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
        this.id = Math.floor(Math.random()*1000000);
    }
    createTask(title,description,dueDate,priority){
        this.tasks.push(new Task(title,description,dueDate,priority));
    }
    deleteTask(id){
        let taskToDelete
        this.tasks.forEach(task => {
            if(task.id === id){
                taskToDelete = task;
            }
        });
        let index = this.tasks.indexOf(taskToDelete);
        this.tasks.splice(index,1);
    }
};

class List {
    constructor(){
        this.projects = [];
    }
    createProject(title){
        this.projects.push(new Project(title));
    }
    deleteProject(id){
        let projectToDelete
        this.projects.forEach(project => {
            if(project.id === id){
                projectToDelete = project;
            }
        });
        let index = this.projects.indexOf(projectToDelete);
        this.tasks.splice(index,1);
    }
}

//created new project example
let list = new List();
list.createProject("Example Project");
//created new task example
list.projects[0].createTask("Example Task", "This is just an example","16-11-2023","Low");
//set task as complete example
list.projects[0].tasks[0].toggleComplete();
//edit task title example
list.projects[0].tasks[0].changeTitle("not example");
// //edit task description example
list.projects[0].tasks[0].changeDescription("this is not an example");
// //edit task due date example
list.projects[0].tasks[0].changeDueDate("18-11-2023");
// //edit task priority example
list.projects[0].tasks[0].changePriority("High");
//delete task example
list.projects[0].deleteTask(list.projects[0].tasks[0].id);
//create new task again example
list.projects[0].createTask("Second Task", "This is just a second example example","16-11-2023","High");

export { Task, Project, List, list };