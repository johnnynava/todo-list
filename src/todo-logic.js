class createTask {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;  
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
}

class createProject {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }
    createTask(title,description,dueDate,priority){
        this.tasks.push(new createTask(title,description,dueDate,priority));
    }
};

//created new project example
let defaultProject = new createProject("Example Project");
//created new task example
defaultProject.createTask("Example Task", "This is just an example","16-11-2023","Low");
//set task as complete example
defaultProject.tasks[0].toggleComplete();
//edit task title example
defaultProject.tasks[0].title = "not example"
// //edit task description example
defaultProject.tasks[0].description = "this is not an example"
// //edit task due date example
defaultProject.tasks[0].dueDate = "18-11-2023"
// //edit task priority example
defaultProject.tasks[0].priority = "High"
//delete task example
defaultProject.tasks.splice(0,1);
defaultProject.createTask("Second Task", "This is just a second example example","16-11-2023","High");

export { createTask, createProject, defaultProject };