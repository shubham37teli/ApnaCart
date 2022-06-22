import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return (
    props.productList.length > 0?
    props.productList.map((product, i) => {
    return <Product product={product} key={i} incQ={props.incQ} index={i} decQ={props.decQ} removeit={props.removeit}/>;
  })
  :<h1>No Products Exists in the Carts</h1> 
  
  )
}
