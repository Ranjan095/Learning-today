
let body=document.querySelector("body");

let button=document.querySelector("#click");

button.addEventListener("click",()=>{

let box=document.createElement("div");
let heading=document.createElement("h1");
heading.innerText="hiii"
box.append(heading)

body.append(box)

})