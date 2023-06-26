/** @format */
import "./product.css";
import Link from "next/link";

let URL = "https://dummyjson.com/products";
let getCats = async () => {
  let res = await fetch(URL);
  let products = await res.json();
  return products.products;
};
const page = async () => {
  let products = await getCats();
//   console.log("=====>", products);
  return (
    <div>
      <Link href={"/"}>go to Home page</Link>
      <h1>Cat Lists</h1>
      <div id="container">
        {products.map((ele) => {
          return (
            <div className="box">
              <div className="imge-box">
                {ele.images.map((ele) => (
                  <img className="image" src={ele} />
                ))}
              </div>

              <div className="info-box">
                <div>
                <h3 className="list">Title : {ele?.title}</h3>
                <h3 className="list">Price : ₹{ele?.price}</h3>
                <h3>Brand : {ele.brand}</h3>
              <p>{ele.rating}*</p>
                </div>
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
