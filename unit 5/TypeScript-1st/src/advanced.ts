/** @format */

// enum (read it and try to implement)

// let getInfo = <Type>(value: Type) => {
//   return value;
// };

// getInfo<string>("adsfas");
// getInfo<number>(12);
// getInfo<boolean>(false)





interface person{
    id:number,
    name:string
}

interface person3 extends person{
    address:string;
    role:'backend'|'frontend'
}

let myData:person3={
id:1,
name:'Ranjan',
address:'Madhubani Bihar',
role:'frontend'
}