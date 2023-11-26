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

//created new project example
let list = new List();
list.createProject("Example Project");
//created new task example
list.projects[0].createTask("Example Task 1", "This is just an example","25-12-2023","High");
//set task as complete example
list.projects[0].tasks[0].toggleComplete();
//create other example tasks
list.projects[0].createTask("Example Task 2", "This is just another example","28-12-2023","Medium");
list.projects[0].createTask("Example Task 3", "","N/A","Low");
list.createProject("Example Project 2");



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerToProjects: () => (/* binding */ addEventListenerToProjects),
/* harmony export */   addEventListenerToTaskCompletion: () => (/* binding */ addEventListenerToTaskCompletion),
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
let taskCompletion = document.querySelectorAll(".completionStatus")

let sidebarProjects;
let selectedProjectIndex = 0;

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
    addProject.close();
    addProjectInput.value = "";
    selectedProjectIndex = _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.length-1;
    createProjectTitle();
    cleanOldTasks();
    _todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
    addEventListenerToTaskCompletion();
    cleanOldProjectsSidebar();
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
        addEventListenerToTaskCompletion();
    }
    addSelectedProjectAfterAddingNewProject();
});

deleteProjectCancelBtn.addEventListener("click", () => {
    deleteProject.close();
})

const deleteSideContent = () => {
    sideContent.innerHTML = "";
}

// Next is finishing DOM manipulation for tasks and then I just need to
// add some sort of storing data technique for saved projects to persist
// through reloads.
// I also need to keep in mind to make an event listener for marking tasks
// as completed! 



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



_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects.forEach(_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.loopProjects);
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToProjects)();
_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[0].tasks.forEach(_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.loopTasks);
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.createProjectTitle)();
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addSelectedProjectPageLoad)();
(0,_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerToTaskCompletion)();
})();

/******/ })()
;