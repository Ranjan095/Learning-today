/** @format */

import { useEffect, useState } from "react";
import { Link ,NavLink} from "react-router-dom";
import { useSearchParams } from "react-router-dom";



export default function Users() {
  let [users, setUsers] = useState([]);
  let[page,setpage]=useState(1);
  let [loading,setLoading]=useState(false)
  let [searchParams,setsearchParams]=useSearchParams();


  

  
 
  let getData = () => {
    return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>

      res.json()
    );
  };
  // console.log(getData())
  let myData = async () => {
    setLoading(true)
    let data = await getData(page);
    setUsers(data);
    setLoading(false)
    // console.log(data.total_pages)
  };
  useEffect(() => {
    myData(page);
    setsearchParams({page:page})
  }, [page]);

//   console.log(users);
// let myVal=searchParams.get('page')
// console.log(myVal)

  return loading?<h1>Loading.......</h1>: (
    <div style={{marginLeft:'50px',marginRight:'50px',marginBottom:'20px'}}>
      <h1>Users Page</h1>
    <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', }}>
      
      {users?.data?.map((ele)=>(
        <div style={{border:'1px solid red',padding:'5px',margin:'5px'}} key={ele.id}>
            <img src={ele.avatar}/>
            <h4>{ele.first_name}</h4>
            <NavLink style={{textDecoration:'none',color:'blue'}} to={`/user/${ele.id}`}>About more</NavLink>    

        </div>
      ))}
    </div>
    <button disabled={page==1} onClick={()=>setpage(page-1)}>Prev</button>
    <button >{page}</button>
    <button disabled={page==users.total_pages} onClick={()=>setpage(page+1)}>Next</button>
    </div>
  );
}
