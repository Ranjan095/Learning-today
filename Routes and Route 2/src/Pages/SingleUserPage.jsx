

import { useParams ,Link,NavLink ,useSearchParams} from "react-router-dom"
import { useState,useEffect } from "react";


export default function SingleUserPage(){
    let [user, setUser] = useState({});
    let [searchParam,setSearchParam]=useSearchParams()
let param=useParams()
// console.log(id)
let id=param.user_id;
let getData = () => {
    return fetch(`https://reqres.in/api/users/${id}`).then((res) =>
      res.json()
    );
  };
//   console.log(getData())
  let myData = async () => {
    let data = await getData();
    setUser(data?.data);
  };
  useEffect(() => {
    myData();
    // setSearchParam({my:id})
  }, []);

console.log(user)
    return <div style={{marginLeft:'150px',marginRight:'150px',border:'1px solid red',padding:'50px'}}>
        <h1>single user page</h1>
        <img src={user.avatar}/>
        <h3>Full Name: {`${user.first_name} ${user.last_name}`}</h3>
        <h4>Email: {user.email}</h4>
        <h2>UserId: {user.id}</h2>
        <NavLink className="Navelink" to='/users'><button>Go to Users Page</button></NavLink>
        
    </div>
}