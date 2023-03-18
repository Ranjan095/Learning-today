/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import SideBar from "../Component/SideBar";
import { getProduct } from "../Redux/Adimin/action";
import ProductList from "./ProductList";

const Home = () => {
  let dispatch = useDispatch();
  let [searchParam]=useSearchParams();
  let location=useLocation()
  


  // console.log(location)
// console.log(searchParam.get('order'))
  // console.log(searchParam.getAll('catogary'))

  let filterarray={
    params:{
      category:searchParam.getAll('catogary'),
      _sort: searchParam.get('order') && 'price',
      _order :searchParam.get('order')
    }
  }

  useEffect(() => {
    dispatch(getProduct(filterarray));
    // getProduct(dispatch,filterarray)
  }, [location.search]);



  let { isLoading, isError, products } = useSelector(
    (store) => store.ProductReducer
  );
  // console.log(products,isLoading,isError)

  return (
    <div style={{display:"flex"}}>
      <div style={{width:'20%'}}>
        <SideBar/>
      </div>

      <div  style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)",width:"80%"}}>
        {products.map((ele) => (
          <ProductList key={ele.id} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default Home;
