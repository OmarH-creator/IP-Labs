class Task{
constructor(text){
this.text = text
this.done = false
}
}

let tasks = []

function addTask(){

let input = document.getElementById("taskInput")
let text = input.value

if(text =="") return

let t = new Task(text)
tasks.push(t)

input.value=""

showTasks()
}

function showTasks(){

let list = document.getElementById("list")
list.innerHTML=""

for(let idx=0;idx<tasks.length;idx++){

let li = document.createElement("li")

li.innerHTML = tasks[idx].text +
" <button onclick='del("+idx+")'>delete</button>"

li.onclick = function(){
tasks[idx].done = !tasks[idx].done
showTasks()
}

if(tasks[idx].done){
li.classList.add("done")
}

list.appendChild(li)

}
}

function del(idx){
tasks.splice(idx,1)
showTasks()
}