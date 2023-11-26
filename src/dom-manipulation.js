import { list } from './todo-logic.js'

const sidebar = document.querySelector("#sidebar");
let tasks = document.querySelector("#tasks");
const addProjectButton = document.querySelector("#sidebarAddProject");
let editProjectButton = document.querySelector('#projectButtons > img[src="img/edit.png"]');
let addTaskButton = document.querySelector(".addTaskButton");
const addProject = document.querySelector("#addProject");
const editProject = document.querySelector("#editProject");
const editProjectInput = document.querySelector("#editProject > form > div input");
const editProjectAddBtn = document.querySelector("#editProject > form > button[type=submit]");
const editrojectCancelBtn = document.querySelector("#editProject > form > button[type=button]");
const addProjectAddBtn = document.querySelector("#addProject > form > button[type=submit]");
const addProjectCancelBtn = document.querySelector("#addProject > form > button[type=button]");
const addProjectInput = document.querySelector("#addProject > form > div > input");
let deleteProjectBtn = document.querySelector('#projectButtons > img[src="img/delete.png"]');
const deleteProject = document.querySelector("#deleteProject");
const deleteProjectDeleteBtn =  document.querySelector("#deleteProjectDeleteBtn");
const deleteProjectCancelBtn = document.querySelector("#deleteProjectCancelBtn");
const sideContent = document.querySelector("#sideContent");
let projectTitle = document.querySelector("#projectTitle");

let sidebarProjects;
let selectedProjectIndex = 0;



const createProjectTitle = () => {
    projectTitle.value = list.projects[selectedProjectIndex].id;
    projectTitle.textContent = list.projects[selectedProjectIndex].name;
}

const cleanOldProjectsSidebar = () => {
    document.querySelectorAll(".sidebarProject").forEach(project => project.remove()); 
}

const cleanOldTasks = () => {
    document.querySelectorAll(".task").forEach(task => task.remove());
}

const removeSelectedProject = () => {
    sidebarProjects = document.querySelectorAll(".sidebarProject");
    sidebarProjects.forEach(project => project.classList.remove("selectedProject"));
}

const addSelectedProjectPageLoad = () => {
    sidebarProjects = document.querySelectorAll(".sidebarProject");
    sidebarProjects[0].classList.add("selectedProject");
}

const addEventListenerToProjects = () => {
    sidebarProjects = document.querySelectorAll(".sidebarProject");
    sidebarProjects.forEach(project => project.addEventListener("click", (e) => {
        let selectedObject;
        list.projects.forEach(project => {
            if(project.id === e.target.value){
                selectedObject = project;
            }
        })
        selectedProjectIndex = list.projects.indexOf(selectedObject);
        cleanOldTasks();
        list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
        createProjectTitle();
        removeSelectedProject();
        project.classList.add("selectedProject");
    }))
}

//Loops the list to add new projects to the sidebar
const loopProjects = (project) => {
    let projectSidebar = document.createElement("div");
    projectSidebar.classList.add("sidebarProject");
    projectSidebar.textContent = project.name;
    projectSidebar.value = project.id;
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

addProjectButton.addEventListener("click", () => {
    addProject.showModal();
})

const addSelectedProjectAfterAddingNewProject = () => {
    sidebarProjects = document.querySelectorAll(".sidebarProject");
    sidebarProjects.forEach(project => {
        if (project.value === projectTitle.value){
            project.classList.add("selectedProject");
        }
    })
}

addProjectAddBtn.addEventListener("click", (e) => {
    if(list.projects.length === 0){
        let projectDiv = document.createElement("div");
        projectDiv.setAttribute("id","project");
        sideContent.appendChild(projectDiv);
        let projectTitleDiv = document.createElement("div");
        projectTitleDiv.setAttribute("id","projectTitle");        
        projectDiv.appendChild(projectTitleDiv);
        let projectButtonsDiv = document.createElement("div");
        projectButtonsDiv.setAttribute("id","projectButtons");  
        projectDiv.appendChild(projectButtonsDiv);
        let editImage = document.createElement("img");
        let deleteImage = document.createElement("img");      
        editImage.setAttribute("src","img/edit.png");
        deleteImage.setAttribute("src","img/delete.png");
        projectButtonsDiv.appendChild(editImage);
        projectButtonsDiv.appendChild(deleteImage);
        let tasksDiv = document.createElement("div");
        tasksDiv.setAttribute("id","tasks");
        sideContent.appendChild(tasksDiv);
        let addTaskDiv = document.createElement("div");
        addTaskDiv.classList.add("addTaskButton");
        tasksDiv.appendChild(addTaskDiv);
        let p = document.createElement("p");
        p.textContent = "Add task";
        addTaskDiv.appendChild(p);
        deleteProjectBtn = document.querySelector('#projectButtons > img[src="img/delete.png"]');
        editProjectButton = document.querySelector('#projectButtons > img[src="img/edit.png"]');
        projectTitle = document.querySelector("#projectTitle");
        tasks = document.querySelector("#tasks");
        addTaskButton = document.querySelector(".addTaskButton");
    }
    e.preventDefault();
    list.createProject(addProjectInput.value);
    addProject.close();
    addProjectInput.value = "";
    selectedProjectIndex = list.projects.length-1;
    createProjectTitle();
    cleanOldTasks();
    list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
    cleanOldProjectsSidebar();
    //add projects back to sidebar
    list.projects.forEach(loopProjects);
    addSelectedProjectAfterAddingNewProject();
    addEventListenerToProjects();
})

addProjectCancelBtn.addEventListener("click", () => {
    addProject.close();
    addProjectInput.value = "";
})

editProjectButton.addEventListener("click", () => {
    editProject.showModal();
    editProjectInput.value = projectTitle.textContent;
})

editProjectAddBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editProject.close();
    projectTitle.textContent = editProjectInput.value;
    list.projects[selectedProjectIndex].name = editProjectInput.value;
    cleanOldProjectsSidebar();
    list.projects.forEach(loopProjects);
    addEventListenerToProjects();
    addSelectedProjectAfterAddingNewProject();
})

editrojectCancelBtn.addEventListener("click", () => {
    editProject.close();
    editProjectInput.value = "";
})

deleteProjectBtn.addEventListener("click", () => {
    deleteProject.showModal();
})

deleteProjectDeleteBtn.addEventListener("click", () => {
    list.projects.splice(selectedProjectIndex, 1);
    cleanOldProjectsSidebar();
    list.projects.forEach(loopProjects);
    addEventListenerToProjects();
    deleteProject.close();
    cleanOldTasks();
    selectedProjectIndex = 0;
    if(list.projects.length === 0){
        deleteSideContent();
    }
    else {
        createProjectTitle();
        list.projects[0].tasks.forEach(loopTasks);
    }
    addSelectedProjectAfterAddingNewProject();
});

deleteProjectCancelBtn.addEventListener("click", () => {
    deleteProject.close();
})

const deleteSideContent = () => {
    sideContent.innerHTML = "";
}

export { loopProjects, loopTasks, addEventListenerToProjects, createProjectTitle, addSelectedProjectPageLoad };