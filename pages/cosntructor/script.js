'use strict'

let usersList = [
    {
        id: 1,
        name: "karo"
    },
    {
        id: 2,
        name: "Alla"
    },
    {
        id: 3,
        name: "Aro"
    }
];
let tasksList = [
    {
        id: 101,
        userId: 1,
        value: "Arajin sharj",
        status: "pending"
    },
    {
        id: 102,
        userId: 1,
        value: "Erkrord sharj",
        status: "inprogress"
    },
    {
        id: 103,
        userId: 2,
        value: "HTML part",
        status: "completed"
    }
];

function Users(data = []) {
    if (!Array.isArray(data)) {
        throw "This value must be only array"
    }
    this.values = data
}

function Tasks(data = []) {

    if (!Array.isArray(data)) {
        throw "This value must be only array"
    }

    this.values = data
}

function CustomTool() {
    if (new.target === CustomTool) {
        throw new Error("You can't calling function not constructor function. You can only implements")
    }
}

CustomTool.prototype.add = function (val={}) {
    if(typeof val!=="object"){
        val={}
    }
    let data={
        id: Date.now(),
        ...val
    }
    this.values.push(data)
    return data
}
CustomTool.prototype.remove = function (id) {
    this.values = this.values.filter(res => res.id !== id)
}
CustomTool.prototype.find = function (id) {
    return this.values.find(res => res.id === id)
}
CustomTool.prototype.where = function (key,value) {
    return this.values.filter(res => res[key] === value)
}
CustomTool.prototype.update = function (id, value) {
    if (!id || !value) {
        throw 'information wrong'
    }
    this.find(id).text = value
}
CustomTool.prototype.save = function () {
    localStorage['tasks'] = JSON.stringify(this.values)
}
CustomTool.prototype.getValue = function () {
   return this.values
}
Tasks.onload = function () {
    let storage = localStorage['tasks']

    if (storage) {
        return JSON.parse(storage)
    }
}

Users.prototype=Object.create(CustomTool.prototype)
Users.prototype.constructor=Users

const userApp=new Users()

userApp.add({id:1,name:"Vardan"})
userApp.add({id:2,name:"karine"})
userApp.add({id:3,name:"Lusine"})


console.log(userApp)

Tasks.prototype=Object.create(CustomTool.prototype)
Tasks.prototype.constructor=Tasks
let appTask = new Tasks()
appTask.add({title:"Es gnalu em 1",status: "pending",userId:1})
appTask.add({title:"Es gnalu em 2",status: "inprogress",userId:1})
appTask.add({title:"Es gnalu em 3",status: "completed",userId:1})
appTask.add({title:"Es gnalu em 4",status: "completed",userId:2})
appTask.add({title:"Es gnalu em 5",status: "completed",userId:3})
appTask.add({title:"Es gnalu em 6",status: "completed",userId:2})









//DOM
let userData=userApp.getValue()
let activeId=userData[0].id
const $= s=>document.querySelector(s)
const taskListEl=$('.tasks-list')
console.log(userData)
taskListEl.innerHTML=userData.map(task=>taskAdd(task)).join('\n')

function taskAdd(task){
    return `
                <div class="task-item ${task.id===activeId?'task-item--active':''}" data-id="${task.id}">
                    <div class="task-info">
                        <div class="task-title">${task.name}</div>
                        <div class="task-meta">ID: #${task.id} </div>
                    </div>
                    <div class="task-actions">
                        <span class="tag">Active</span>
                        <button class="icon-btn" title="Delete task">🗑</button>
                    </div>
                </div>

`
}


$('#addBtn').onclick=function (){
    const fieldEl=$('#field')

    const data=userApp.add({name:fieldEl.value})
    taskListEl.innerHTML+=taskAdd(data)
}
taskListEl.onclick=function (e){
    const el=e.target.closest('.task-item')
        $('.task-item--active').classList.remove('task-item--active')

    el.classList.add('task-item--active')


    let id= +el.dataset.id
        taskShow(id)

}
taskShow(activeId)

function taskShow(id){
    $('.values-body').innerHTML=appTask.where('userId',id).map(res=>(`
                        <div class="value-row">
                        <div>
                            <div class="value-main">
                                <span class="value-text">${res.title}</span>
                                <span class="value-sub">taskId: ${res.userId}</span>
                            </div>
                        </div>
                        <div class="value-id">#${res.id}</div>
                        <div>
                            <span class="status-badge status-${res.status}">${res.status}</span>
                        </div>
                        <div class="value-actions">
                            <button class="link-btn">Edit</button>
                            <button class="icon-btn" title="Delete value">🗑</button>
                        </div>
                    </div>

    
    `)).join('\n')

}




// let app=new Task([{"id": 1, "text": "MeRy"}, {"id": 3, "text": "Meruj"}, {"id": 1763791001860, "text": "Gevorg"}])
// let app = new Task(Task.onload())
//add
// app.add("Mery",1)
// app.add("Daniel",2)
// app.add("Meruj",3)
// app.add("Gevorg")
// app.save()

// delete
// app.remove(2)
// app.save()
//
// //edit
// app.find(1)
//
// //update
// app.update(1,'MeRy')
// app.save()
// console.log(app.values)
// console.log(app)
















