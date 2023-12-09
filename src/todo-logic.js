class Task {
  constructor(title, description, dueDate, priority, complete = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.id = Math.floor(Math.random() * 1000000);
  }
  toggleComplete() {
    switch (this.complete) {
      case true:
        this.complete = false;
        break;
      case false:
        this.complete = true;
        break;
    }
  }
  changeTitle(title) {
    this.title = title;
  }
  changeDescription(description) {
    this.description = description;
  }
  changeDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  changePriority(priority) {
    this.priority = priority;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.id = Math.floor(Math.random() * 1000000);
  }
  createTask(title, description, dueDate, priority) {
    this.tasks.push(new Task(title, description, dueDate, priority));
  }
  deleteTask(id) {
    let taskToDelete;
    this.tasks.forEach((task) => {
      if (task.id === id) {
        taskToDelete = task;
      }
    });
    let index = this.tasks.indexOf(taskToDelete);
    this.tasks.splice(index, 1);
  }
}

class List {
  constructor() {
    this.projects = [];
  }
  createProject(title) {
    this.projects.push(new Project(title));
  }
  deleteProject(id) {
    let projectToDelete;
    this.projects.forEach((project) => {
      if (project.id === id) {
        projectToDelete = project;
      }
    });
    let index = this.projects.indexOf(projectToDelete);
    this.tasks.splice(index, 1);
  }
}

let list = new List();
if (!localStorage.list) {
  // created new project example
  list.createProject("Example Project");
  //created new task example
  list.projects[0].createTask(
    "Example Task 1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus in mollis nunc. Tincidunt id aliquet risus feugiat in ante metus dictum at. Egestas fringilla phasellus faucibus scelerisque eleifend donec. At ultrices mi tempus imperdiet nulla malesuada. Adipiscing commodo elit at imperdiet dui accumsan sit amet. At erat pellentesque adipiscing commodo.",
    "25-12-2023",
    "High"
  );
  //set task as complete example
  list.projects[0].tasks[0].toggleComplete();
  //create other example tasks
  list.projects[0].createTask(
    "Example Task 2",
    "This is just another example",
    "28-12-2023",
    "Medium"
  );
  list.projects[0].createTask("Example Task 3", "", "N/A", "Low");
  list.createProject("Example Project 2");
  localStorage.setItem("list", JSON.stringify(list));
} else {
  let i = 0;
  let localStorageList = JSON.parse(localStorage.list);
  localStorageList.projects.forEach((project) => {
    list.createProject(project.name);
    localStorageList.projects[i].tasks.forEach((task) => {
      list.projects[i].createTask(
        task.title,
        task.description,
        task.dueDate,
        task.priority,
        task.complete
      );
    });
    i++;
  });
}

export { list };
