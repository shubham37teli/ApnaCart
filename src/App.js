import React, { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList.js";
import Footer from "./Component/Footer.js";
import Additem from "./Component/Additem";

function App() {
  const products = [
    {
      price: 99999,
      Name: "Iphone max",
      quantity: 0,
    },
    {
      price: 99999,
      Name: "Iphone max pro",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

 
  const incQ = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decQ = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const reset = () => {
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity=0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  }
   
  const removeit = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem =(Name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      Name: Name,
      quantity:0
    });
    setProductList(newProductList);
   
  } 


  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem addItem={addItem} />
        <ProductList productList={productList} incQ={incQ} decQ={decQ} removeit={removeit}/>
      </main>
      <Footer totalAmount={totalAmount } reset={reset}/>
    </>
  );
}

export default App;
