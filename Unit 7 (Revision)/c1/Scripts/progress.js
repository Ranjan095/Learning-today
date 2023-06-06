/** @format */

// Write code for the Progress page here
let processData = JSON.parse(localStorage.getItem("priority-list")) || [];
let tbody = document.querySelector("tbody");

function showProgressData(data) {
    tbody.innerHTML=""
  data.forEach((ele, i) => {
    let row = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = ele.name;
    let description = document.createElement("td");
    description.innerText = ele.description;
    let startDate = document.createElement("td");
    startDate.innerText = ele.startDate;
    let endDate = document.createElement("td");
    endDate.innerText = ele.endDate;
    let priority = document.createElement("td");
    priority.innerText = ele.priority;

    let ADD = document.createElement("td");
    ADD.innerText = "Add";
    ADD.addEventListener("click", () => {
      addData(ele);
      deleteData(processData, i);
    });

    row.append(name, description, startDate, endDate, priority, ADD);
    tbody.append(row);
  });
}


let DoneList=JSON.parse(localStorage.getItem("done-list")) || [];

let addData=(data)=>{
    DoneList.push(data);
    localStorage.setItem("done-list",JSON.stringify(DoneList))
}

let deleteData=(data,i)=>{
data.splice(i,1)
localStorage.setItem("priority-list",JSON.stringify(data))
showProgressData(data)
// console.log(data)
}


showProgressData(processData);
