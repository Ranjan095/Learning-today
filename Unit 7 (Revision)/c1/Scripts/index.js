/** @format */

// Write code related to Home page here

let formData = document.querySelector("form");
let data = JSON.parse(localStorage.getItem("task-list")) || [];

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    name: formData.name.value,
    description: formData.desc.value,
    startDate: formData.start.value,
    endDate: formData.end.value,
    priority: formData.priority.value,
  };
//   console.log(obj);
  data.push(obj);
  localStorage.setItem("task-list", JSON.stringify(data));
//   console.log(JSON.parse(localStorage.getItem("task-list")) || []);
});
