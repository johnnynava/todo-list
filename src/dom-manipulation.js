// import { list } from './todo-logic.js'

const sidebar = document.querySelector("#sidebar");
const tasks = document.querySelector("#tasks");
const addProjectButton = document.querySelector("#sidebarAddProject");
const addTaskButton = document.querySelector(".addTaskButton")

//Loops the list to add new projects to the sidebar
const loopProjects = (project) => {
    let projectSidebar = document.createElement("div");
    projectSidebar.classList.add("sidebarProject");
    projectSidebar.textContent = project.name;
    addProjectButton.remove();
    sidebar.appendChild(projectSidebar);
    sidebar.appendChild(addProjectButton);
};

//Loops the tasks to add new tasks to the sidebar
const loopTasks = (task) => {
    let taskSide = document.createElement("div");
    taskSide.classList.add("task");
    tasks.appendChild(taskSide);
    let taskSideLeft = document.createElement("div");
    taskSideLeft.classList.add("leftSideTask");
    let taskSideRight = document.createElement("div");
    taskSideRight.classList.add("rightSideTask");
    taskSide.appendChild(taskSideLeft);
    taskSide.appendChild(taskSideRight);
    let taskCompletion = document.createElement("div");
    taskCompletion.textContent = "✔";
    if (task.complete === true){
        taskCompletion.classList.add("taskCompletionTrue");
    }
    else if (task.complete === false){
        taskCompletion.classList.add("taskCompletionFalse");
    }
    taskSideLeft.appendChild(taskCompletion);
    let taskTitle = document.createElement("div");
    taskTitle.classList.add("taskTitle");
    taskTitle.textContent = task.title;
    taskSideLeft.appendChild(taskTitle);
    let taskPriority = document.createElement("div");
    if (task.priority === "High"){
        taskPriority.classList.add("highPrio");
        taskPriority.textContent = "High Priority";
    }
    else if(task.priority === "Medium"){
        taskPriority.classList.add("midPrio");
        taskPriority.textContent = "Medium Priority";
    }
    else if(task.priority === "Low"){
        taskPriority.classList.add("lowPrio");
        taskPriority.textContent = "Low Priority";
    }
    taskSideRight.appendChild(taskPriority);
    let taskDueDate = document.createElement("div");
    taskDueDate.classList.add("taskDueDate");
    taskDueDate.textContent = task.dueDate;
    taskSideRight.appendChild(taskDueDate);
    let viewImage = document.createElement("img");
    viewImage.setAttribute("src","img/view.png");
    let editImage = document.createElement("img");
    editImage.setAttribute("src","img/edit.png");
    let deleteImage = document.createElement("img");
    deleteImage.setAttribute("src","img/delete.png");
    taskSideRight.appendChild(viewImage);
    taskSideRight.appendChild(editImage);
    taskSideRight.appendChild(deleteImage);
    addTaskButton.remove();
    tasks.appendChild(addTaskButton);
}

export { loopProjects, loopTasks };