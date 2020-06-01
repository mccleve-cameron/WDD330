import { Task } from './task.js';

const tasks = [];
const today = new Date();
const style = {weekday:'long', month:'short', day:'numeric'};


const CHECK = "checked";
const UNCHECK = "circle";
const linethru = "linethru";

document.querySelector('h1').innerHTML = today.toLocaleDateString("en-US", style);
document.querySelector('#add').addEventListener('click', addTask);

function addTask() {
    console.log("addTask called");
    const content = document.getElementById('userInput').value;
    const newTask = new Task(Date.now(), content, false); 
    tasks.push(newTask);

    document.querySelector('#list').innerHTML += `<p>test</p>`;
    /*`<li>
        <i id=${newTask.Id} class="circle"></i>
        <article>${newTask.Content}-${newTask.Status}</article>
        <i id=${newTask.Id} class="de fa fa-trash-o"></i>
    </li>`; */   
    //console.table(tasks);
    document.getElementById('userInput').value = "";
    let elem = document.getElementById("#test");
    console.log(elem);
}

document.querySelector(".checked").addEventListener('click', function(element){
    element.target.classList.toggle(CHECK);
    element.target.classList.toggle(UNCHECK);
    //element.target.nextSibling.classList.toggle(linethru);

    markComplete(element);

    console.log(element.target.classList);
    console.log('clicked');

});
// document.querySelector(".circle").addEventListener('click', function(element){
//     element.target.classList.toggle(CHECK);
//     element.target.classList.toggle(UNCHECK);
//     //element.target.nextSibling.classList.toggle(linethru);

//     unComplete(element);

// });

function markComplete(element) {
    console.log(element.target.id);
    const tmpId = element.target.id;
    tasks.forEach(task => {
        if (task.Id == tmpId){
            task.Status = true;
            //console.log(task);
        }
  
    });
    console.log('mark complete called');
}

// function unComplete(element) {
//     console.log(element.target.id);
//     const tmpId = element.target.id;
//     tasks.forEach(task => {
//         if (task.Id == tmpId){
//             task.Status = false;
//             //console.log(task);
//         }
//     });
// }

document.querySelector("#completed").addEventListener('click', showCompleted);
function showCompleted(){
    document.querySelector('#list').innerHTML = "";
    tasks.forEach(task => {
        if (task.Status){
            console.log(task);
            document.querySelector('#list').innerHTML +=
            `<li>
            <i id=${task.Id} class="checked"></i>
            <article>${task.Content}-${task.Status}</article>
            <i id=${task.Id} class="de fa fa-trash-o"></i>
            </li>`;   
        }
    });
}

document.querySelector("#active").addEventListener('click', showActive);
function showActive(){
    document.querySelector('#list').innerHTML = "";
    tasks.forEach(task => {
        if (!task.Status){
            console.log(task);
            document.querySelector('#list').innerHTML +=
            `<li>
            <i id=${task.Id} class="circle"></i>
            <article>${task.Content}-${task.Status}</article>
            <i id=${task.Id} class="de fa fa-trash-o"></i>
            </li>`;   
        }
    });
}

document.querySelector("#allTasks").addEventListener('click', loadAll);

function loadAll(){
    console.log("loading all");
    document.querySelector('#list').innerHTML = "";
    tasks.forEach(task => {
        if (task.Status){
            console.log(task);
            document.querySelector('#list').innerHTML +=
            `<li>
            <i id=${task.Id} class="fa fa-check-circle"></i>
            <article>${task.Content}-${task.Status}</article>
            <i id=${task.Id} class="de fa fa-trash-o"></i>
            </li>`;   
        }
        else if (!task.Status){
            console.log(task);
            document.querySelector('#list').innerHTML +=
            `<li>
            <i id=${task.Id} class="fa fa-circle-thin"></i>
            <article>${task.Content}-${task.Status}</article>
            <i id=${task.Id} class="de fa fa-trash-o"></i>
            </li>`;   
        }
    });
}

// document.querySelector('li').addEventListener('click', function(event){
//     const element = event.target;
//     const elementJob = element.attributes.job.value;

//     if (elementJob == "complete") 
// });






// const myTask = new Task(Date.now, 'clean room', false);

// const myTask2 = new Task(Date.now, 'sweep floor', false);
//let tasks = [myTask, myTask2];


// tasks.forEach(
//     task => {
//         // let section = document.createElement('section');
//         // section.innerHTML = task.Text;

//         // document.querySelector('main').appendChild(section);

//         document.querySelector('#list').innerHTML +=
//     `<li>
//         <input type="checkbox" class="check">
//         <article>${task.Content}-${task.Status}</article>
//         <i class="de fa fa-trash-o"></i>
//     </li>`;
//     }
// )