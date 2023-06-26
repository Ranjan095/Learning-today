/** @format */

let counter = () => {
  let count = 0;
  let incrementCount = () => {
    count++;
    console.log(count)
  
  };
  return incrementCount;
};
let count1=counter()
count1()
count1()
count1()
