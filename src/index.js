import { Task, Project, List, list } from './todo-logic.js'
import { loopProjects, loopTasks } from './dom-manipulation.js';

list.projects.forEach(loopProjects);
list.projects[0].tasks.forEach(loopTasks);