import axios from "axios"

export let postTodo= async(obj:string)=>{
let res=await axios.post('http://localhost:8080/products',obj);

}