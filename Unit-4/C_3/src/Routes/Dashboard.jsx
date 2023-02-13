import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";
import Loader from "../Components/Loader";


function Dashboard() {
let [data,setData]=useState([])
let [loading,setloading]=useState(false)
let [page,setPage]=useState(1)
let [sort,setSort]=useState('price')
let [order,setOrder]=useState('asc')
let [limit,setLimit]=useState(10)

let handleChange=(val)=>{
  setPage(page+val)
}

useEffect(()=>{
  setloading(true)
fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}&order=${order}&sort=${sort}`)
.then((res)=>res.json())
.then((data)=>{
  setData(data)
  setloading(false)
  console.log(data)
})
  
},[page,order])
// loginUser, logoutUser

  let {authState,logoutUser}=useContext(AuthContext)
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
        Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" disabled={order==='asc'} onClick={()=>setOrder('asc')}>Sort low to high</button>
      <button data-testid="high-to-low" disabled={order==='desc'} onClick={()=>setOrder('desc')}>Sort high to low</button>
      </div>
      <br />
      <br />

{/* //{current,onChange,totalPage} */}

    <Pagination current={page} onChange={handleChange}  totalPage={data.totalPages}/>
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading?<Loader />:<ProductList products={data.data}/>}
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;
