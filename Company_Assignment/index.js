/** @format */

let rootEle = document.getElementById("root");

let flag = true;

let button = document.createElement("button");
button.innerText = "ON";

button.addEventListener("click", () => {
  flag = !flag;
  if (flag) {
    button.innerText = "ON";
  } else {
    button.innerText = "OFF";
  }
});
rootEle.append(button);
