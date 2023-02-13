import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products=[]}) => {
  // console.log(products.data)


//{title,price,image,category}
  return <div data-testid="products-container">
    {products.map((ele) => {
    return <ProductItem key={ele.id} image={ele.image} title={ele.title} price={ele.price} category={ele.category}/>
    })}
    </div>;
};

export default ProductList;
