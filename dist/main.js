/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   list: () => (/* binding */ list)
/* harmony export */ });
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

let list;

// if (!localStorage.list){
    // created new project example
    list = new List();
    list.createProject("Example Project");
    //created new task example
    list.projects[0].createTask("Example Task 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus in mollis nunc. Tincidunt id aliquet risus feugiat in ante metus dictum at. Egestas fringilla phasellus faucibus scelerisque eleifend donec. At ultrices mi tempus imperdiet nulla malesuada. Adipiscing commodo elit at imperdiet dui accumsan sit amet. At erat pellentesque adipiscing commodo.","25-12-2023","High");
    //set task as complete example
    list.projects[0].tasks[0].toggleComplete();
    //create other example tasks
    list.projects[0].createTask("Example Task 2", "This is just another example","28-12-2023","Medium");
    list.projects[0].createTask("Example Task 3", "","N/A","Low");
    list.createProject("Example Project 2");
//     localStorage.setItem("Project",JSON.stringify(Project));
//     localStorage.setItem("Task",JSON.stringify(Task));
//     localStorage.setItem("list", JSON.stringify(list));
// }

// else{
//     list = JSON.parse(localStorage.list);
// }



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerToDeleteTaskButtons: () => (/* binding */ addEventListenerToDeleteTaskButtons),
/* harmony export */   addEventListenerToEditTaskBtns: () => (/* binding */ addEventListenerToEditTaskBtns),
/* harmony export */   addEventListenerToProjects: () => (/* binding */ addEventListenerToProjects),
/* harmony export */   addEventListenerToTaskCompletion: () => (/* binding */ addEventListenerToTaskCompletion),
/* harmony export */   addEventListenerToViewTasks: () => (/* binding */ addEventListenerToViewTasks),
/* harmony export */   addSelectedProjectPageLoad: () => (/* binding */ addSelectedProjectPageLoad),
/* harmony export */   createProjectTitle: () => (/* binding */ createProjectTitle),
/* harmony export */   loopProjects: () => (/* binding */ loopProjects),
/* harmony export */   loopTasks: () => (/* binding */ loopTasks)
/* harmony export */ });
/* harmony import */ var _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


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
let taskCompletion = document.querySelectorAll(".completionStatus");
const viewTask = document.querySelector("#viewTask");
const viewTaskNameValue = document.querySelector("#viewTaskNameValue");
const viewDueDateValue = document.querySelector("#viewDueDateValue");
const viewTaskDescriptionValue = document.querySelector("#viewTaskDescriptionValue");
const viewPriorityValue = document.querySelector("#viewPriorityValue");
const viewTaskExitBtn = document.querySelector("#viewTaskDiv > button");
const addTask = document.querySelector("#addTask");
const addTaskAddBtn = document.querySelector("#addTaskAddBtn");
const addTaskCancelBtn = document.querySelector("#addTaskCancelBtn");
const editTask = document.querySelector("#editTask");
const editTaskAddBtn = document.querySelector("#editTaskAddBtn");
const editTaskCancelBtn = document.querySelector("#editTaskCancelBtn");
const deleteTask = document.querySelector("#deleteTask");
let deleteTaskButtons = document.querySelectorAll('.rightSideTask > img[src="img/delete.png"]');
const deleteTaskDeleteBtn = document.querySelector("#deleteTaskDeleteBtn");
const deleteTaskCancelBtn = document.querySelector("#deleteTaskCancelBtn");


let viewTaskButtons;
let sidebarProjects;
let selectedProjectIndex = 0;
let selectedTaskIndex;

const createProjectTitle = () => {
    projectTitle.value = _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].id;
    projectTitle.textContent = _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].name;
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
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.forEach(project => {
            if(project.id === e.target.value){
                selectedObject = project;
            }
        })
        selectedProjectIndex = _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.indexOf(selectedObject);
        cleanOldTasks();
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
        addEventListenerToViewTasks();
        addEventListenerToEditTaskBtns();
        addEventListenerToDeleteTaskButtons();
        addEventListenerToTaskCompletion();
        createProjectTitle();
        removeSelectedProject();
        project.classList.add("selectedProject");
    }))
}



const addEventListenerToTaskCompletion = () => {
    taskCompletion = document.querySelectorAll(".completionStatus");
    taskCompletion.forEach(task => task.addEventListener("click",() => {
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(indTask => {
            if(indTask.id == task.value){
                indTask.toggleComplete();
            }
        })
        console.log(task.value);
        cleanOldTasks();
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
        addEventListenerToViewTasks();
        addEventListenerToEditTaskBtns();   
        addEventListenerToDeleteTaskButtons();
        addEventListenerToTaskCompletion();
    }))
};

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
    taskCompletion.value = task.id;
    taskCompletion.textContent = "✔";
    if (task.complete === true){
        taskCompletion.classList.add("taskCompletionTrue");
    }
    else if (task.complete === false){
        taskCompletion.classList.add("taskCompletionFalse");
    }
    taskCompletion.classList.add("completionStatus");
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
    viewImage.value = task.id;
    let editImage = document.createElement("img");
    editImage.setAttribute("src","img/edit.png");
    editImage.value = task.id;
    let deleteImage = document.createElement("img");
    deleteImage.value = task.id;
    deleteImage.setAttribute("src","img/delete.png");
    taskSideRight.appendChild(viewImage);
    taskSideRight.appendChild(editImage);
    taskSideRight.appendChild(deleteImage);
    addTaskButton.remove();
    tasks.appendChild(addTaskButton);
    addEventListenerToAddTaskBtn();
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
    if(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.length === 0){
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
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.createProject(addProjectInput.value);
    localStorage.setItem("list", JSON.stringify(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list));
    addProject.close();
    addProjectInput.value = "";
    selectedProjectIndex = _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.length-1;
    createProjectTitle();
    cleanOldTasks();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
    addEventListenerToTaskCompletion();
    cleanOldProjectsSidebar();
    addEventListenerToDeleteTaskButtons();
    //add projects back to sidebar
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.forEach(loopProjects);
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
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].name = editProjectInput.value;
    localStorage.setItem("list", JSON.stringify(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list));
    cleanOldProjectsSidebar();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.forEach(loopProjects);
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
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.splice(selectedProjectIndex, 1);
    localStorage.setItem("list", JSON.stringify(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list));
    cleanOldProjectsSidebar();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.forEach(loopProjects);
    addEventListenerToProjects();
    deleteProject.close();
    cleanOldTasks();
    selectedProjectIndex = 0;
    if(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.length === 0){
        deleteSideContent();
    }
    else {
        createProjectTitle();
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[0].tasks.forEach(loopTasks);
        addEventListenerToViewTasks();
        addEventListenerToEditTaskBtns();
        addEventListenerToTaskCompletion();
        addEventListenerToDeleteTaskButtons();
    }
    addSelectedProjectAfterAddingNewProject();
});

deleteProjectCancelBtn.addEventListener("click", () => {
    deleteProject.close();
})

const deleteSideContent = () => {
    sideContent.innerHTML = "";
}

const addEventListenerToViewTasks = () => {
    viewTaskButtons = document.querySelectorAll('.rightSideTask > img[src="img/view.png"]');
    viewTaskButtons.forEach(viewBtn => viewBtn.addEventListener("click", () => {
        viewTask.showModal();
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(task => {
            if(task.id === viewBtn.value){
                viewTaskNameValue.textContent = task.title;
                viewDueDateValue.textContent = task.dueDate;
                viewTaskDescriptionValue.textContent = task.description;
                if (task.priority === "High"){
                    viewPriorityValue.classList.remove("midPrio");
                    viewPriorityValue.classList.remove("lowPrio");
                    viewPriorityValue.classList.add("highPrio");
                    viewPriorityValue.textContent = "High Priority";
                }
                else if(task.priority === "Medium"){
                    viewPriorityValue.classList.remove("highPrio");
                    viewPriorityValue.classList.remove("lowPrio");
                    viewPriorityValue.classList.add("midPrio");
                    viewPriorityValue.textContent = "Medium Priority";
                }
                else if(task.priority === "Low"){
                    viewPriorityValue.classList.remove("highPrio");
                    viewPriorityValue.classList.remove("midPrio");
                    viewPriorityValue.classList.remove();
                    viewPriorityValue.classList.add("lowPrio");
                    viewPriorityValue.textContent = "Low Priority";
                }
            }
        })
        addEventListenerToViewTasks();
    }))
}

viewTaskExitBtn.addEventListener("click",() => {
    viewTask.close()
});


const addEventListenerToAddTaskBtn = () => {
    addTaskButton = document.querySelector(".addTaskButton");
    addTaskButton.addEventListener("click",() =>{
        addTask.showModal();
    })
}

document.querySelector("#dueDate").addEventListener("click",() =>{
    if(document.querySelector("#dueDate").checked){
        document.querySelector("#dueDateSelector").removeAttribute("disabled");
    }
    else {
        document.querySelector("#dueDateSelector").setAttribute("disabled","");
        document.querySelector("#dueDateSelector").value = "";
    };
});

document.querySelector("#editDueDate").addEventListener("click",() =>{
    if(document.querySelector("#editDueDate").checked){
        document.querySelector("#editDueDateSelector").removeAttribute("disabled");
    }
    else {
        document.querySelector("#editDueDateSelector").setAttribute("disabled","");
        document.querySelector("#editDueDateSelector").value = "";
    };
});

addTaskAddBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    addTask.close();
    let dueDate;
    if(!document.querySelector("#dueDateSelector").value){
        dueDate = "N/A";
    }
    else if(document.querySelector("#dueDateSelector").value){
        dueDate = document.querySelector("#dueDateSelector").value.split("-").reverse().join("-");
    }
    let priority;
    if (document.querySelector('#addTask > form > div > select').value === "low"){
        priority = "Low";
    }
    else if(document.querySelector('#addTask > form > div > select').value === "mid"){
        priority = "Medium";
    }
    else if(document.querySelector('#addTask > form > div > select').value === "high"){
        priority = "High";
    }
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].createTask(document.querySelector("#taskName").value,document.querySelector("#taskDescription").value,dueDate,priority);
    localStorage.setItem("list", JSON.stringify(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list));
    cleanOldTasks();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
    addEventListenerToViewTasks();
    addEventListenerToEditTaskBtns();
    addEventListenerToDeleteTaskButtons();
    addEventListenerToTaskCompletion();
    resetAddTaskFields();
})

addTaskCancelBtn.addEventListener("click",()=>{
    addTask.close();
    resetAddTaskFields();
})

const resetAddTaskFields = () =>{
    document.querySelector("#taskName").value = "";
    document.querySelector("#dueDateSelector").value = "";
    document.querySelector("#dueDateSelector").setAttribute("disabled","");
    document.querySelector("#taskDescription").value = "";
    document.querySelectorAll('#addTask > form > div > select > option').forEach(option => option.removeAttribute("selected","selected"));
    document.querySelector('#addTask > form > div > select > option[value="low"]').setAttribute("selected","selected");
}

const addEventListenerToEditTaskBtns = () => {
    let selectedTask;
    let editTaskButton = document.querySelectorAll('.rightSideTask > img[src="img/edit.png"]');
    editTaskButton.forEach(btn => btn.addEventListener("click",() => {
        editTask.showModal();
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(task => {
            if(task.id === btn.value){
                selectedTask = task;
                selectedTaskIndex = _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.indexOf(selectedTask);
                document.querySelector("#editTaskName").value = task.title;
                if(task.dueDate == "N/A"){
                    document.querySelector("#editDueDate").removeAttribute("checked");
                    document.querySelector("#editDueDateSelector").value = "";
                }
                else{
                    document.querySelector("#editDueDate").setAttribute("checked","");
                    document.querySelector("#editDueDateSelector").value = task.dueDate.split("-").reverse().join("-");
                    document.querySelector("#editDueDateSelector").removeAttribute("disabled");
                }
                document.querySelector("#editTaskDescription").value = task.description;
                if (task.priority === "High"){
                    document.querySelectorAll("#editPriority > option").forEach(option => option.removeAttribute("selected"));
                    document.querySelector('#editPriority > option[value="high"]').setAttribute("selected","selected");
                }
                else if(task.priority === "Medium"){
                    document.querySelectorAll("#editPriority > option").forEach(option => option.removeAttribute("selected"));
                    document.querySelector('#editPriority > option[value="mid"]').setAttribute("selected","selected");
                }
                else if(task.priority === "Low"){
                    document.querySelectorAll("#editPriority > option").forEach(option => option.removeAttribute("selected"));
                    document.querySelector('#editPriority > option[value="low"]').setAttribute("selected","selected");
                }
            }
        })
    }))
}


editTaskAddBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    editTask.close();
    let dueDate;
    if(!document.querySelector("#editDueDateSelector").value){
        dueDate = "N/A";
    }
    else if(document.querySelector("#editDueDateSelector").value){
        dueDate = document.querySelector("#editDueDateSelector").value.split("-").reverse().join("-");
    }
    let priority;
    if (document.querySelector('#editTask > form > div > select').value === "low"){
        priority = "Low";
    }
    else if(document.querySelector('#editTask > form > div > select').value === "mid"){
        priority = "Medium";
    }
    else if(document.querySelector('#editTask > form > div > select').value === "high"){
        priority = "High";
    }
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks[selectedTaskIndex].changeTitle(document.querySelector("#editTaskName").value);
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks[selectedTaskIndex].changeDescription(document.querySelector("#editTaskDescription").value);
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks[selectedTaskIndex].changeDueDate(dueDate);
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks[selectedTaskIndex].changePriority(priority);
    localStorage.setItem("list", JSON.stringify(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list));
    cleanOldTasks();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
    addEventListenerToViewTasks();
    addEventListenerToEditTaskBtns();
    addEventListenerToDeleteTaskButtons();
    addEventListenerToTaskCompletion();
    resetAddTaskFields();
})

editTaskCancelBtn.addEventListener("click",() => {
    editTask.close();
})

const addEventListenerToDeleteTaskButtons = () => {
    deleteTaskButtons = document.querySelectorAll('.rightSideTask > img[src="img/delete.png"]');
    deleteTaskButtons.forEach(button => button.addEventListener("click", () => {
        let selectedTask;
        deleteTask.showModal();
        _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(task => {
            if(task.id === button.value){
                selectedTask = task;
            }
        })
        selectedTaskIndex = _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.indexOf(selectedTask);
    }))
}

deleteTaskDeleteBtn.addEventListener("click",()=>{
    deleteTask.close();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.splice(selectedTaskIndex,1);
    localStorage.setItem("list", JSON.stringify(_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list));
    cleanOldTasks();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
    addEventListenerToViewTasks();
    addEventListenerToDeleteTaskButtons();
    addEventListenerToTaskCompletion();
})

deleteTaskCancelBtn.addEventListener("click",()=>{
    deleteTask.close();
})



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



// console.log(list.projects[0].tasks[0]);
// console.log(list.projects[0].tasks[0].toggleComplete());
// console.log(list.projects[0].tasks[0]);
_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.forEach(_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.loopProjects);
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToProjects)();
_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[0].tasks.forEach(_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.loopTasks);
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.createProjectTitle)();
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addSelectedProjectPageLoad)();
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToTaskCompletion)();
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToViewTasks)();
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToDeleteTaskButtons)();
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToEditTaskBtns)();


//web storage api considerations

//when I:
//Add, delete or edit a project
//Add, delete or edit a task

//when there's no storage, prepopulate list
//if there's storage, use user values
})();

/******/ })()
;