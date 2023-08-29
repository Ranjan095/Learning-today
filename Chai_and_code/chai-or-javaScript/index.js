/** @format */

Array.prototype.temp = "Ranjan";

let arr = [1, 2, 3, 4, 5, 6];

for (let key in arr) {
  if (arr.hasOwnProperty(key)) {
    console.log(arr[key]);
  }
}
