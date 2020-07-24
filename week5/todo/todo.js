import { Task } from './task.js';

let tasks = [];
const today = new Date();
const style = {weekday:'long', month:'short', day:'numeric'};
let classStyle = "circle";
let lineStyle = "none";

const CHECK = "checked";
const UNCHECK = "circle";
const lineThru = "linethru";

console.log(today);
document.querySelector('h1').innerHTML = today.toLocaleDateString("en-US", style);
document.querySelector('#add').addEventListener('click', addTask);
document.querySelector('#add').addEventListener('keyUp', addTask);

if (localStorage.tasksStorage != undefined) { loadStorage(); }

function loadStorage() {
    tasks = JSON.parse(localStorage.tasksStorage);

    tasks.forEach(task => {
        addHTML(task);
    });
}

function addHTML(task) {
    if(task.Status){ classStyle = "checked"; lineStyle = "linethru"; }
    else { classStyle = "circle"; lineStyle = "none"; }
    document.querySelector('#list').innerHTML +=
    `<li>
        <i id=${task.Id} class=${classStyle}></i>
        <article class=${lineStyle}>${task.Content}</article>
        <i id=${task.Id} class="trash"></i>
    </li>`; 
}

function addTask() {
    
    const content = document.getElementById('userInput').value;
    const newTask = new Task(Date.now(), content, false); 
    tasks.push(newTask);
    addHTML(newTask);

    localStorage.tasksStorage = JSON.stringify(tasks);
    document.getElementById('userInput').value = "";
    console.table(tasks);
}

document.querySelector('#list').addEventListener('click', function(element){
    console.log(element.target.classList['value']);
    if (element.target.classList['value'] == 'circle') {
        element.target.classList.toggle(CHECK);
        element.target.classList.toggle(UNCHECK);
        element.target.nextSibling.nextSibling.classList.toggle(lineThru);
        
        markComplete(element);
    }
    else if (element.target.classList['value'] == 'checked') {
        element.target.classList.toggle(CHECK);
        element.target.classList.toggle(UNCHECK);
        element.target.nextSibling.nextSibling.classList.toggle(lineThru);

        markUnComplete(element);
    }
    else if (element.target.classList['value'] == 'trash') {

        removeTask(element);
    }

});

function refreshStorage() {
    localStorage.tasksStorage = JSON.stringify(tasks);   
}

function removeTask(element){
    console.log("removeTask");
    console.log(element.target.id);
    const tmpId = element.target.id;
    let count = 0;
    tasks.forEach(task => {
        if (task.Id == tmpId){
            tasks.splice(count, 1);
        }
        count++;
    });
    refreshStorage();
    loadAll();
}

function markUnComplete(element) {
    console.log("mark un-complete called");
    console.log(element.target.id);
    const tmpId = element.target.id;
    tasks.forEach(task => {
        if (task.Id == tmpId){
            task.Status = false;

        }
    });
    refreshStorage();
}

function markComplete(element) {
    console.log("mark completed called");
    console.log(element.target.id);
    const tmpId = element.target.id;
    tasks.forEach(task => {
        if (task.Id == tmpId){
            task.Status = true;

        }
    });
    refreshStorage();
}

document.querySelector("#completed").addEventListener('click', showCompleted);
function showCompleted(){
    document.querySelector('#list').innerHTML = "";
    tasks.forEach(task => {
        if (task.Status){
            addHTML(task);
        }
    });
}

document.querySelector("#active").addEventListener('click', showActive);
function showActive(){
    document.querySelector('#list').innerHTML = "";
    tasks.forEach(task => {
        if (!task.Status){
            addHTML(task);
        }
    });
}

document.querySelector("#allTasks").addEventListener('click', loadAll);

function loadAll(){
    console.log("loading all");
    document.querySelector('#list').innerHTML = "";
    tasks.forEach(task => {
        addHTML(task);
    });
}
