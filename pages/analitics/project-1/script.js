"use strict"


const $ = el => document.querySelector(el)


let count = 1
$('#addTask').onclick = function (e) {

    $('#taskList').insertAdjacentHTML('beforeend', `
          <div class="row mb-3 align-items-center">
            <div class="col-4">
                <input type="text" name="title-${count}" class="form-control  names" 
                       placeholder="Անվանում ${count}" required>
            </div>
            <div class="col-3">
                <input type="number" class="form-control times " 
                       placeholder="Ժամ ${count}" name="hour-${count}" min="0" required>
            </div>
            <div class="col-3">
                <input type="checkbox" name="done-${count}" class="form-check-input form-control done  mt-2" id="done-${count}" >
                <label for="done-${count}">Կատարված է</label>
            </div>
        </div>

  `)
    count++
}
$('#formData').onsubmit = function (e) {
    e.preventDefault()
    const el = e.target.elements
    const result = []
    let output = {}
    for (let i = 0; i < el.length; i++) {
        if (el[i].name && el[i].value) {
            // result.push([el[i].name.split('-')[1],
            //     el[i].name.split('-')[0],
            //     el[i].value==='on'?el[i].checked:el[i].value])

            let id = el[i].name.split('-')[1]
            let name = el[i].name.split('-')[0]
            let value = el[i].value === 'on' ? el[i].checked : el[i].value
            if (!output[id]) {
                output[id] = {
                    id,
                }
            }

            output[id][name]=value


        }

    }

output=Object.values(output)
    fancResult(output)
}

function fancResult(values){

    const output=values.reduce((prev,curr)=>{
        if(curr.done){
            prev.done++
            prev.hours+= +curr.hour
        }

        return prev
    },{
        done:0,
        hours:0
    })

   let percent=(100/values.length)*output.done


    $('#result').innerHTML=`
    
        <p>✅ Ընդհանուր առաջադրանքներ՝ <strong>${values.length}</strong></p>
    <p>📌 Կատարված է՝ <strong>-</strong> (${percent}%)</p>
    <p>🕓 Ժամանակ՝ <strong>${output.hours}</strong> ժամ</p>
    
    `
}

