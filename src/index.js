import { list } from './todo-logic.js'
import { loopProjects, loopTasks, addEventListenerToProjects, createProjectTitle, addSelectedProjectPageLoad, addEventListenerToTaskCompletion } from './dom-manipulation.js';

list.projects.forEach(loopProjects);
addEventListenerToProjects();
list.projects[0].tasks.forEach(loopTasks);
createProjectTitle();
addSelectedProjectPageLoad();
addEventListenerToTaskCompletion();