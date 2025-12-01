const $=s=>document.querySelector(s)
let base=[]
if(localStorage['lists']){
    base=JSON.parse(localStorage['lists'])
}
base.forEach(data=>{
    viewPrint(data)
})

$('#save').onclick=function (){
let val=$('#field')
    // ...validation
    let data={
        id:Date.now(),
        label:val.value
    }
    base.push(data)
    localStorage['lists']=JSON.stringify(base)
    viewPrint(data)

    val.value=''
}

function viewPrint(data){
    $('.list').innerHTML+=`<li>${data.id}  ${data.label}</li>`

}