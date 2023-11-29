import { list } from './todo-logic.js'
import { loopProjects, loopTasks, addEventListenerToProjects, createProjectTitle, addSelectedProjectPageLoad, addEventListenerToTaskCompletion, addEventListenerToViewTasks, addEventListenerToDeleteTaskButtons, addEventListenerToEditTaskBtns } from './dom-manipulation.js';

// console.log(list.projects[0].tasks[0]);
// console.log(list.projects[0].tasks[0].toggleComplete());
// console.log(list.projects[0].tasks[0]);
list.projects.forEach(loopProjects);
addEventListenerToProjects();
list.projects[0].tasks.forEach(loopTasks);
createProjectTitle();
addSelectedProjectPageLoad();
addEventListenerToTaskCompletion();
addEventListenerToViewTasks();
addEventListenerToDeleteTaskButtons();
addEventListenerToEditTaskBtns();


//web storage api considerations

//when I:
//Add, delete or edit a project
//Add, delete or edit a task

//when there's no storage, prepopulate list
//if there's storage, use user values