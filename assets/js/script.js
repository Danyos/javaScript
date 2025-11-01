const project=[
    {
        id:1,
        label:"Counter",
        to:'pages/Counter/index.html',
        image:'assets/images/counter.jpg',
    },
    {
        id:2,
        label:"Traffic Lights",
        to:'pages/Counter/index.html',
        image:'assets/images/counter.jpg',
    },
    {
        id:3,
        label:"Slider",
        to:'pages/Counter/index.html',
        image:'assets/images/counter.jpg',
    },{
        id:4,
        label:"X/O",
        to:'pages/Counter/index.html',
        image:'assets/images/counter.jpg',
    },{
        id:5,
        label:"Scramble",
        to:'pages/Counter/index.html',
        image:'assets/images/counter.jpg',
    },{
        id:6,
        label:"TodoList",
        to:'pages/Counter/index.html',
        image:'assets/images/counter.jpg',
    }

]

const $=s=>document.querySelector(s)



project.forEach(res=>{
    $('#featured').innerHTML+=`
                <div class="col-md-4">
                <div class="item-card project-card h-100">
                    <img src="${res.image}" class="w-100 rounded-2xl mb-3 project-thumb"
                         alt="project">
                    <h5 class="mb-1">${res.label}</h5>
                    <p class="muted">Admin panel built with React + Node.js featuring student progress tracking,
                        AI‑generated feedback, and localStorage‑based caching.</p>
                    <a class="btn btn-primary btn-sm btn-pill"
                       href="${res.to}" target="_blank">Open</a>
                </div>
            </div>
    `
})

