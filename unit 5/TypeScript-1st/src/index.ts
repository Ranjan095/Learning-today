// /** @format */

// let n = 10;
// let m: string = "dfs";
// let res = n + m;
// console.log(res);

// let arr: number[] = [1, 2, 3, 4];
// arr.push(2);

// let arrstr: string[] = ["a", "b", "c"];
// arrstr.push("1");

// // type user = { name: string; id: string; address: string };
// // let obj: user = {
// //   id: "1",
// //   name: "Ranjan",
// //   address: "Madhubani Bihar",
// // };
// // obj["fullName"] = "Ranjan Kumar Yadav";

// function add(a:number,b:number){
//   return a+b
// }

// console.log(add(2,2))

type user={
  id:number, name:string,age:number;
}
type developer={
  position:string,specialition:string
}

let obj:user & developer={
id:1,
name:'Ranjan yadav',
age:26,
position:'frontend Developer',
specialition:'React'

}


