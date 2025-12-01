const cars = [
    { id:1, brand:"BMW", model:"X5", year:2018, fuel:"diesel", mileage:98000, price:34000, status:"active" },
    { id:2, brand:"Mercedes", model:"C200", year:2016, fuel:"petrol", mileage:120000, price:21000, status:"active" },
    { id:3, brand:"Toyota", model:"Prius", year:2014, fuel:"hybrid", mileage:150000, price:12500, status:"sold" },
    { id:4, brand:"Tesla", model:"Model 3", year:2021, fuel:"electric", mileage:40000, price:38000, status:"active" },
    { id:5, brand:"Audi", model:"A6", year:2019, fuel:"diesel", mileage:70000, price:29500, status:"service" },
];

const listElm={
    fuel:'all',
    status:'all'
}




const $=s=>document.querySelector(s)
cars.forEach(res=>{
    $('#tbody').innerHTML+=`
            <tr>
                <td>${res.brand}<b>${res.model} </b></td>
                <td>${res.year}</td>
                <td>${res.mileage}km</td>
                <td>${res.fuel}</td>
                <td>${res.status}</td>
                <td class="text-end">${res.price}</td>
            </tr>`
})
$('#fuel').oninput=function (e){
    listElm.fuel=e.target.value
    render()
}
$('#status').oninput=function (e){
    listElm.status=e.target.value
    render()
}
function render(){
    let test=cars.filter(res=>(
        (listElm.fuel==='all'||listElm.fuel===res.fuel)
        &&(listElm.status==='all'||listElm.status===res.status)

    ))
    console.log(test)
}