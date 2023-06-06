/** @format */

// Write code related to dashboard page here

let tBody = document.querySelector("tbody");
let taskList = JSON.parse(localStorage.getItem("task-list")) || [];
let taskCount = document.querySelector("#task-count");
let filter=document.querySelector("#filter")

function showDashboard(data) {
    tBody.innerHTML=''
  taskCount.innerText = data.length;

  data.forEach((ele, i) => {
    let row = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText=ele.name;
    let description=document.createElement("td");
    description.innerText=ele.description;
    let startDate=document.createElement("td");
    startDate.innerText=ele.startDate;
    let endDate=document.createElement("td");
    endDate.innerText=ele.endDate;
    let priority=document.createElement("td");
    priority.innerText=ele.priority;

    let ADD=document.createElement("td");
    ADD.innerText="Add";
    ADD.addEventListener("click",()=>{
addData(ele)
deleteData(taskList,i)
    })

    row.append(name,description,startDate,endDate,priority,ADD);
    tBody.append(row)
  });
}

let priorityList=JSON.parse(localStorage.getItem("priority-list")) || [];

let addData=(data)=>{
    priorityList.push(data);
    localStorage.setItem("priority-list",JSON.stringify(priorityList))
}

let deleteData=(data,i)=>{
data.splice(i,1)
localStorage.setItem("task-list",JSON.stringify(data))
showDashboard(data)
// console.log(data)
}


//******/ for filter according to priority /**** */
filter.addEventListener("change",(e)=>{
    let val=e.target.value
    //***************** */
    // if(val==""){
    //     showDashboard(taskList); 
    // };
//************************ */
    let filterData=taskList.filter((ele)=>{
        if(ele.priority==val){
            return ele
        }
        else if(val==''){
            return ele
        }
    })
showDashboard(filterData)
})



showDashboard(taskList);
