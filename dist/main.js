/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
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
/* harmony export */   loopProjects: () => (/* binding */ loopProjects),
/* harmony export */   loopTasks: () => (/* binding */ loopTasks)
/* harmony export */ });
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
_todo_logic_js__WEBPACK_IMPORTED_MODULE_0__.list.projects[0].tasks.forEach(_dom_manipulation_js__WEBPACK_IMPORTED_MODULE_1__.loopTasks);
})();

/******/ })()
;