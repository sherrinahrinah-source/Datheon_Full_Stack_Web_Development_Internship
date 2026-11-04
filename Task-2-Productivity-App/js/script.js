
// ==========================================
// 1. GET HTML ELEMENTS
// ==========================================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskCategory = document.getElementById("taskCategory");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const totalTasks = document.getElementById("totalTasks");
const activeTasks = document.getElementById("activeTasks");
const completedTasks = document.getElementById("completedTasks");

const progressPercentage =
    document.getElementById("progressPercentage");

const progressFill =
    document.getElementById("progressFill");


// ==========================================
// 2. APPLICATION VARIABLES
// ==========================================

let tasks = [];
let currentFilter = "all";
let searchTerm = "";
let editingTaskId = null;


// ==========================================
// 3. SAVE TASKS TO LOCAL STORAGE
// ==========================================

function saveTasks() {

    localStorage.setItem("myTasks", JSON.stringify(tasks));

}


// ==========================================
// 4. LOAD SAVED TASKS
// ==========================================

function loadTasks() {

    const savedTasks = localStorage.getItem("myTasks");

    if (savedTasks) {

        try {

            const parsedTasks = JSON.parse(savedTasks);

            tasks = Array.isArray(parsedTasks) ? parsedTasks : [];

        } catch (error) {

            tasks = [];

            console.error("Unable to load saved tasks:", error);

        }

    }

    displayTasks();

}


// ==========================================
// 5. ADD AND UPDATE TASKS
// ==========================================

taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const taskName = taskInput.value.trim();
    const category = taskCategory.value;
    const dueDate = taskDate.value;

    if (taskName === "") {

        alert("Please enter a task name.");

        return;

    }

    if (editingTaskId !== null) {

        // UPDATE EXISTING TASK

        tasks = tasks.map(function(task) {

            if (task.id === editingTaskId) {

                return {
                    ...task,
                    name: taskName,
                    category: category,
                    dueDate: dueDate
                };

            }

            return task;

        });

        editingTaskId = null;

    } else {

        // CREATE NEW TASK

        const newTask = {

            id: Date.now(),
            name: taskName,
            category: category,
            dueDate: dueDate,
            completed: false

        };

        tasks.push(newTask);

    }

    saveTasks();

    displayTasks();

    taskForm.reset();

});


// ==========================================
// 6. UPDATE TASK STATISTICS
// ==========================================

function updateStats() {

    const total = tasks.length;

    const completed = tasks.filter(function(task) {

        return task.completed;

    }).length;

    const active = total - completed;

    totalTasks.textContent = total;

    activeTasks.textContent = active;

    completedTasks.textContent = completed;

    // Calculate completion percentage

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    progressPercentage.textContent = percentage + "%";

    progressFill.style.width = percentage + "%";

}


// ==========================================
// 7. DISPLAY AND FILTER TASKS
// ==========================================

function displayTasks() {

    taskList.innerHTML = "";

    updateStats();

    // FILTER TASKS

    const filteredTasks = tasks.filter(function(task) {

        // Completion filter

        if (currentFilter === "active" && task.completed) {

            return false;

        }

        if (currentFilter === "completed" && !task.completed) {

            return false;

        }

        // Search filter

        const matchesSearch = task.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchesSearch;

    });


    // SHOW EMPTY MESSAGE

    if (filteredTasks.length === 0) {

        const emptyMessage = document.createElement("li");

        emptyMessage.textContent = "No tasks found.";

        taskList.appendChild(emptyMessage);

        return;

    }


    // DISPLAY EACH TASK

    filteredTasks.forEach(function(task) {

        const li = document.createElement("li");

        // TASK INFORMATION

        const taskText = document.createElement("span");

        taskText.textContent =
            task.name + " | " +
            task.category + " | " +
            (task.dueDate || "No due date");


        // COMPLETED TASK STYLING

        if (task.completed) {

            taskText.style.textDecoration = "line-through";

            taskText.style.color = "gray";

        }


        // EDIT BUTTON

        const editBtn = document.createElement("button");

        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function() {

            taskInput.value = task.name;

            taskCategory.value = task.category;

            taskDate.value = task.dueDate;

            editingTaskId = task.id;

            taskInput.focus();

        });


        // COMPLETE BUTTON

        const completeBtn = document.createElement("button");

        completeBtn.textContent =
            task.completed ? "Undo" : "Complete";

        completeBtn.addEventListener("click", function() {

            task.completed = !task.completed;

            saveTasks();

            displayTasks();

        });


        // DELETE BUTTON

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function() {

            if (editingTaskId === task.id) {

                editingTaskId = null;

                taskForm.reset();

            }

            tasks = tasks.filter(function(item) {

                return item.id !== task.id;

            });

            saveTasks();

            displayTasks();

        });


        // ADD BUTTONS TO TASK

        li.appendChild(taskText);

        li.appendChild(editBtn);

        li.appendChild(completeBtn);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

}


// ==========================================
// 8. SEARCH TASKS
// ==========================================

searchInput.addEventListener("input", function() {

    searchTerm = searchInput.value;

    displayTasks();

});


// ==========================================
// 9. FILTER BUTTON EVENTS
// ==========================================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        displayTasks();

    });

});


// ==========================================
// 10. LOAD TASKS WHEN PAGE OPENS
// ==========================================

loadTasks();
