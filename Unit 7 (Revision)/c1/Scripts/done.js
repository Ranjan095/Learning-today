/** @format */

// Write code for the Progress page here
let doneList = JSON.parse(localStorage.getItem("done-list")) || [];
let tbody = document.querySelector("tbody");

function showDoneList(data) {

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

 

    row.append(name, description, startDate, endDate, priority);
    tbody.append(row);
  });
}
showDoneList(doneList)