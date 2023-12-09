import { list } from "./todo-logic.js";

const sidebar = document.querySelector("#sidebar");
let tasks = document.querySelector("#tasks");
const addProjectButton = document.querySelector("#sidebarAddProject");
let editProjectButton = document.querySelector(
  '#projectButtons > img[src="img/edit.png"]'
);
let addTaskButton = document.querySelector(".addTaskButton");
const addProject = document.querySelector("#addProject");
const editProject = document.querySelector("#editProject");
const editProjectInput = document.querySelector(
  "#editProject > form > div input"
);
const editProjectAddBtn = document.querySelector(
  "#editProject > form > button[type=submit]"
);
const editrojectCancelBtn = document.querySelector(
  "#editProject > form > button[type=button]"
);
const addProjectAddBtn = document.querySelector(
  "#addProject > form > button[type=submit]"
);
const addProjectCancelBtn = document.querySelector(
  "#addProject > form > button[type=button]"
);
const addProjectInput = document.querySelector(
  "#addProject > form > div > input"
);
let deleteProjectBtn = document.querySelector(
  '#projectButtons > img[src="img/delete.png"]'
);
const deleteProject = document.querySelector("#deleteProject");
const deleteProjectDeleteBtn = document.querySelector(
  "#deleteProjectDeleteBtn"
);
const deleteProjectCancelBtn = document.querySelector(
  "#deleteProjectCancelBtn"
);
const sideContent = document.querySelector("#sideContent");
let projectTitle = document.querySelector("#projectTitle");
let taskCompletion = document.querySelectorAll(".completionStatus");
const viewTask = document.querySelector("#viewTask");
const viewTaskNameValue = document.querySelector("#viewTaskNameValue");
const viewDueDateValue = document.querySelector("#viewDueDateValue");
const viewTaskDescriptionValue = document.querySelector(
  "#viewTaskDescriptionValue"
);
const viewPriorityValue = document.querySelector("#viewPriorityValue");
const viewTaskExitBtn = document.querySelector("#viewTaskDiv > button");
const addTask = document.querySelector("#addTask");
const addTaskAddBtn = document.querySelector("#addTaskAddBtn");
const addTaskCancelBtn = document.querySelector("#addTaskCancelBtn");
const editTask = document.querySelector("#editTask");
const editTaskAddBtn = document.querySelector("#editTaskAddBtn");
const editTaskCancelBtn = document.querySelector("#editTaskCancelBtn");
const deleteTask = document.querySelector("#deleteTask");
let deleteTaskButtons = document.querySelectorAll(
  '.rightSideTask > img[src="img/delete.png"]'
);
const deleteTaskDeleteBtn = document.querySelector("#deleteTaskDeleteBtn");
const deleteTaskCancelBtn = document.querySelector("#deleteTaskCancelBtn");

let viewTaskButtons;
let sidebarProjects;
let selectedProjectIndex = 0;
let selectedTaskIndex;

const createProjectTitle = () => {
  projectTitle.value = list.projects[selectedProjectIndex].id;
  projectTitle.textContent = list.projects[selectedProjectIndex].name;
};

const cleanOldProjectsSidebar = () => {
  document
    .querySelectorAll(".sidebarProject")
    .forEach((project) => project.remove());
};

const cleanOldTasks = () => {
  document.querySelectorAll(".task").forEach((task) => task.remove());
};

const removeSelectedProject = () => {
  sidebarProjects = document.querySelectorAll(".sidebarProject");
  sidebarProjects.forEach((project) =>
    project.classList.remove("selectedProject")
  );
};

const addSelectedProjectPageLoad = () => {
  sidebarProjects = document.querySelectorAll(".sidebarProject");
  sidebarProjects[0].classList.add("selectedProject");
};

const addEventListenerToProjects = () => {
  sidebarProjects = document.querySelectorAll(".sidebarProject");
  sidebarProjects.forEach((project) =>
    project.addEventListener("click", (e) => {
      let selectedObject;
      list.projects.forEach((project) => {
        if (project.id === e.target.value) {
          selectedObject = project;
        }
      });
      selectedProjectIndex = list.projects.indexOf(selectedObject);
      cleanOldTasks();
      list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
      addEventListenerToViewTasks();
      addEventListenerToEditTaskBtns();
      addEventListenerToDeleteTaskButtons();
      addEventListenerToTaskCompletion();
      createProjectTitle();
      removeSelectedProject();
      project.classList.add("selectedProject");
    })
  );
};

const addEventListenerToTaskCompletion = () => {
  taskCompletion = document.querySelectorAll(".completionStatus");
  taskCompletion.forEach((task) =>
    task.addEventListener("click", () => {
      list.projects[selectedProjectIndex].tasks.forEach((indTask) => {
        if (indTask.id == task.value) {
          indTask.toggleComplete();
        }
      });
      console.log(task.value);
      cleanOldTasks();
      list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
      addEventListenerToViewTasks();
      addEventListenerToEditTaskBtns();
      addEventListenerToDeleteTaskButtons();
      addEventListenerToTaskCompletion();
    })
  );
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
  if (task.complete === true) {
    taskCompletion.classList.add("taskCompletionTrue");
  } else if (task.complete === false) {
    taskCompletion.classList.add("taskCompletionFalse");
  }
  taskCompletion.classList.add("completionStatus");
  taskSideLeft.appendChild(taskCompletion);
  let taskTitle = document.createElement("div");
  taskTitle.classList.add("taskTitle");
  taskTitle.textContent = task.title;
  taskSideLeft.appendChild(taskTitle);
  let taskPriority = document.createElement("div");
  if (task.priority === "High") {
    taskPriority.classList.add("highPrio");
    taskPriority.textContent = "High Priority";
  } else if (task.priority === "Medium") {
    taskPriority.classList.add("midPrio");
    taskPriority.textContent = "Medium Priority";
  } else if (task.priority === "Low") {
    taskPriority.classList.add("lowPrio");
    taskPriority.textContent = "Low Priority";
  }
  taskSideRight.appendChild(taskPriority);
  let taskDueDate = document.createElement("div");
  taskDueDate.classList.add("taskDueDate");
  taskDueDate.textContent = task.dueDate;
  taskSideRight.appendChild(taskDueDate);
  let viewImage = document.createElement("img");
  viewImage.setAttribute("src", "img/view.png");
  viewImage.value = task.id;
  let editImage = document.createElement("img");
  editImage.setAttribute("src", "img/edit.png");
  editImage.value = task.id;
  let deleteImage = document.createElement("img");
  deleteImage.value = task.id;
  deleteImage.setAttribute("src", "img/delete.png");
  taskSideRight.appendChild(viewImage);
  taskSideRight.appendChild(editImage);
  taskSideRight.appendChild(deleteImage);
  addTaskButton.remove();
  tasks.appendChild(addTaskButton);
  addEventListenerToAddTaskBtn();
};

addProjectButton.addEventListener("click", () => {
  addProject.showModal();
});

const addSelectedProjectAfterAddingNewProject = () => {
  sidebarProjects = document.querySelectorAll(".sidebarProject");
  sidebarProjects.forEach((project) => {
    if (project.value === projectTitle.value) {
      project.classList.add("selectedProject");
    }
  });
};

addProjectAddBtn.addEventListener("click", (e) => {
  if (list.projects.length === 0) {
    let projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", "project");
    sideContent.appendChild(projectDiv);
    let projectTitleDiv = document.createElement("div");
    projectTitleDiv.setAttribute("id", "projectTitle");
    projectDiv.appendChild(projectTitleDiv);
    let projectButtonsDiv = document.createElement("div");
    projectButtonsDiv.setAttribute("id", "projectButtons");
    projectDiv.appendChild(projectButtonsDiv);
    let editImage = document.createElement("img");
    let deleteImage = document.createElement("img");
    editImage.setAttribute("src", "img/edit.png");
    deleteImage.setAttribute("src", "img/delete.png");
    projectButtonsDiv.appendChild(editImage);
    projectButtonsDiv.appendChild(deleteImage);
    let tasksDiv = document.createElement("div");
    tasksDiv.setAttribute("id", "tasks");
    sideContent.appendChild(tasksDiv);
    let addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("addTaskButton");
    tasksDiv.appendChild(addTaskDiv);
    let p = document.createElement("p");
    p.textContent = "Add task";
    addTaskDiv.appendChild(p);
    deleteProjectBtn = document.querySelector(
      '#projectButtons > img[src="img/delete.png"]'
    );
    editProjectButton = document.querySelector(
      '#projectButtons > img[src="img/edit.png"]'
    );
    projectTitle = document.querySelector("#projectTitle");
    tasks = document.querySelector("#tasks");
    addTaskButton = document.querySelector(".addTaskButton");
  }
  e.preventDefault();
  list.createProject(addProjectInput.value);
  localStorage.setItem("list", JSON.stringify(list));

  addProject.close();
  addProjectInput.value = "";
  selectedProjectIndex = list.projects.length - 1;
  createProjectTitle();
  cleanOldTasks();
  list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
  addEventListenerToTaskCompletion();
  cleanOldProjectsSidebar();
  addEventListenerToDeleteTaskButtons();
  //add projects back to sidebar
  list.projects.forEach(loopProjects);
  addSelectedProjectAfterAddingNewProject();
  addEventListenerToProjects();
});

addProjectCancelBtn.addEventListener("click", () => {
  addProject.close();
  addProjectInput.value = "";
});

editProjectButton.addEventListener("click", () => {
  editProject.showModal();
  editProjectInput.value = projectTitle.textContent;
});

editProjectAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  editProject.close();
  projectTitle.textContent = editProjectInput.value;
  list.projects[selectedProjectIndex].name = editProjectInput.value;
  localStorage.setItem("list", JSON.stringify(list));
  cleanOldProjectsSidebar();
  list.projects.forEach(loopProjects);
  addEventListenerToProjects();
  addSelectedProjectAfterAddingNewProject();
});

editrojectCancelBtn.addEventListener("click", () => {
  editProject.close();
  editProjectInput.value = "";
});

deleteProjectBtn.addEventListener("click", () => {
  deleteProject.showModal();
});

deleteProjectDeleteBtn.addEventListener("click", () => {
  list.projects.splice(selectedProjectIndex, 1);
  localStorage.setItem("list", JSON.stringify(list));
  cleanOldProjectsSidebar();
  list.projects.forEach(loopProjects);
  addEventListenerToProjects();
  deleteProject.close();
  cleanOldTasks();
  selectedProjectIndex = 0;
  if (list.projects.length === 0) {
    deleteSideContent();
  } else {
    createProjectTitle();
    list.projects[0].tasks.forEach(loopTasks);
    addEventListenerToViewTasks();
    addEventListenerToEditTaskBtns();
    addEventListenerToTaskCompletion();
    addEventListenerToDeleteTaskButtons();
  }
  addSelectedProjectAfterAddingNewProject();
});

deleteProjectCancelBtn.addEventListener("click", () => {
  deleteProject.close();
});

const deleteSideContent = () => {
  sideContent.innerHTML = "";
};

const addEventListenerToViewTasks = () => {
  viewTaskButtons = document.querySelectorAll(
    '.rightSideTask > img[src="img/view.png"]'
  );
  viewTaskButtons.forEach((viewBtn) =>
    viewBtn.addEventListener("click", () => {
      viewTask.showModal();
      list.projects[selectedProjectIndex].tasks.forEach((task) => {
        if (task.id === viewBtn.value) {
          viewTaskNameValue.textContent = task.title;
          viewDueDateValue.textContent = task.dueDate;
          viewTaskDescriptionValue.textContent = task.description;
          if (task.priority === "High") {
            viewPriorityValue.classList.remove("midPrio");
            viewPriorityValue.classList.remove("lowPrio");
            viewPriorityValue.classList.add("highPrio");
            viewPriorityValue.textContent = "High Priority";
          } else if (task.priority === "Medium") {
            viewPriorityValue.classList.remove("highPrio");
            viewPriorityValue.classList.remove("lowPrio");
            viewPriorityValue.classList.add("midPrio");
            viewPriorityValue.textContent = "Medium Priority";
          } else if (task.priority === "Low") {
            viewPriorityValue.classList.remove("highPrio");
            viewPriorityValue.classList.remove("midPrio");
            viewPriorityValue.classList.remove();
            viewPriorityValue.classList.add("lowPrio");
            viewPriorityValue.textContent = "Low Priority";
          }
        }
      });
      addEventListenerToViewTasks();
    })
  );
};

viewTaskExitBtn.addEventListener("click", () => {
  viewTask.close();
});

const addEventListenerToAddTaskBtn = () => {
  addTaskButton = document.querySelector(".addTaskButton");
  addTaskButton.addEventListener("click", () => {
    addTask.showModal();
  });
};

document.querySelector("#dueDate").addEventListener("click", () => {
  if (document.querySelector("#dueDate").checked) {
    document.querySelector("#dueDateSelector").removeAttribute("disabled");
  } else {
    document.querySelector("#dueDateSelector").setAttribute("disabled", "");
    document.querySelector("#dueDateSelector").value = "";
  }
});

document.querySelector("#editDueDate").addEventListener("click", () => {
  if (document.querySelector("#editDueDate").checked) {
    document.querySelector("#editDueDateSelector").removeAttribute("disabled");
  } else {
    document.querySelector("#editDueDateSelector").setAttribute("disabled", "");
    document.querySelector("#editDueDateSelector").value = "";
  }
});

addTaskAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask.close();
  let dueDate;
  if (!document.querySelector("#dueDateSelector").value) {
    dueDate = "N/A";
  } else if (document.querySelector("#dueDateSelector").value) {
    dueDate = document
      .querySelector("#dueDateSelector")
      .value.split("-")
      .reverse()
      .join("-");
  }
  let priority;
  if (
    document.querySelector("#addTask > form > div > select").value === "low"
  ) {
    priority = "Low";
  } else if (
    document.querySelector("#addTask > form > div > select").value === "mid"
  ) {
    priority = "Medium";
  } else if (
    document.querySelector("#addTask > form > div > select").value === "high"
  ) {
    priority = "High";
  }
  list.projects[selectedProjectIndex].createTask(
    document.querySelector("#taskName").value,
    document.querySelector("#taskDescription").value,
    dueDate,
    priority
  );
  localStorage.setItem("list", JSON.stringify(list));
  cleanOldTasks();
  list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
  addEventListenerToViewTasks();
  addEventListenerToEditTaskBtns();
  addEventListenerToDeleteTaskButtons();
  addEventListenerToTaskCompletion();
  resetAddTaskFields();
});

addTaskCancelBtn.addEventListener("click", () => {
  addTask.close();
  resetAddTaskFields();
});

const resetAddTaskFields = () => {
  document.querySelector("#taskName").value = "";
  document.querySelector("#dueDateSelector").value = "";
  document.querySelector("#dueDateSelector").setAttribute("disabled", "");
  document.querySelector("#taskDescription").value = "";
  document
    .querySelectorAll("#addTask > form > div > select > option")
    .forEach((option) => option.removeAttribute("selected", "selected"));
  document
    .querySelector('#addTask > form > div > select > option[value="low"]')
    .setAttribute("selected", "selected");
};

const addEventListenerToEditTaskBtns = () => {
  let selectedTask;
  let editTaskButton = document.querySelectorAll(
    '.rightSideTask > img[src="img/edit.png"]'
  );
  editTaskButton.forEach((btn) =>
    btn.addEventListener("click", () => {
      editTask.showModal();
      list.projects[selectedProjectIndex].tasks.forEach((task) => {
        if (task.id === btn.value) {
          selectedTask = task;
          selectedTaskIndex =
            list.projects[selectedProjectIndex].tasks.indexOf(selectedTask);
          document.querySelector("#editTaskName").value = task.title;
          if (task.dueDate == "N/A") {
            document.querySelector("#editDueDate").removeAttribute("checked");
            document.querySelector("#editDueDateSelector").value = "";
          } else {
            document.querySelector("#editDueDate").setAttribute("checked", "");
            document.querySelector("#editDueDateSelector").value = task.dueDate
              .split("-")
              .reverse()
              .join("-");
            document
              .querySelector("#editDueDateSelector")
              .removeAttribute("disabled");
          }
          document.querySelector("#editTaskDescription").value =
            task.description;
          if (task.priority === "High") {
            document
              .querySelectorAll("#editPriority > option")
              .forEach((option) => option.removeAttribute("selected"));
            document
              .querySelector('#editPriority > option[value="high"]')
              .setAttribute("selected", "selected");
          } else if (task.priority === "Medium") {
            document
              .querySelectorAll("#editPriority > option")
              .forEach((option) => option.removeAttribute("selected"));
            document
              .querySelector('#editPriority > option[value="mid"]')
              .setAttribute("selected", "selected");
          } else if (task.priority === "Low") {
            document
              .querySelectorAll("#editPriority > option")
              .forEach((option) => option.removeAttribute("selected"));
            document
              .querySelector('#editPriority > option[value="low"]')
              .setAttribute("selected", "selected");
          }
        }
      });
    })
  );
};

editTaskAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  editTask.close();
  let dueDate;
  if (!document.querySelector("#editDueDateSelector").value) {
    dueDate = "N/A";
  } else if (document.querySelector("#editDueDateSelector").value) {
    dueDate = document
      .querySelector("#editDueDateSelector")
      .value.split("-")
      .reverse()
      .join("-");
  }
  let priority;
  if (
    document.querySelector("#editTask > form > div > select").value === "low"
  ) {
    priority = "Low";
  } else if (
    document.querySelector("#editTask > form > div > select").value === "mid"
  ) {
    priority = "Medium";
  } else if (
    document.querySelector("#editTask > form > div > select").value === "high"
  ) {
    priority = "High";
  }
  list.projects[selectedProjectIndex].tasks[selectedTaskIndex].changeTitle(
    document.querySelector("#editTaskName").value
  );
  list.projects[selectedProjectIndex].tasks[
    selectedTaskIndex
  ].changeDescription(document.querySelector("#editTaskDescription").value);
  list.projects[selectedProjectIndex].tasks[selectedTaskIndex].changeDueDate(
    dueDate
  );
  list.projects[selectedProjectIndex].tasks[selectedTaskIndex].changePriority(
    priority
  );
  localStorage.setItem("list", JSON.stringify(list));
  cleanOldTasks();
  list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
  addEventListenerToViewTasks();
  addEventListenerToEditTaskBtns();
  addEventListenerToDeleteTaskButtons();
  addEventListenerToTaskCompletion();
  resetAddTaskFields();
});

editTaskCancelBtn.addEventListener("click", () => {
  editTask.close();
});

const addEventListenerToDeleteTaskButtons = () => {
  deleteTaskButtons = document.querySelectorAll(
    '.rightSideTask > img[src="img/delete.png"]'
  );
  deleteTaskButtons.forEach((button) =>
    button.addEventListener("click", () => {
      let selectedTask;
      deleteTask.showModal();
      list.projects[selectedProjectIndex].tasks.forEach((task) => {
        if (task.id === button.value) {
          selectedTask = task;
        }
      });
      selectedTaskIndex =
        list.projects[selectedProjectIndex].tasks.indexOf(selectedTask);
    })
  );
};

deleteTaskDeleteBtn.addEventListener("click", () => {
  deleteTask.close();
  list.projects[selectedProjectIndex].tasks.splice(selectedTaskIndex, 1);
  localStorage.setItem("list", JSON.stringify(list));
  cleanOldTasks();
  list.projects[selectedProjectIndex].tasks.forEach(loopTasks);
  addEventListenerToViewTasks();
  addEventListenerToDeleteTaskButtons();
  addEventListenerToTaskCompletion();
});

deleteTaskCancelBtn.addEventListener("click", () => {
  deleteTask.close();
});

export {
  loopProjects,
  loopTasks,
  addEventListenerToProjects,
  createProjectTitle,
  addSelectedProjectPageLoad,
  addEventListenerToTaskCompletion,
  addEventListenerToViewTasks,
  addEventListenerToDeleteTaskButtons,
  addEventListenerToEditTaskBtns,
};
