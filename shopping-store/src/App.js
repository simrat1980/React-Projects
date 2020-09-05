import React, {useState,useEffect} from 'react';
import './App.css';
import Nav from './Nav';
import Items from './Items';
import Cart from './Cart';

import axios from 'axios';
import {Switch,Route,Redirect} from 'react-router-dom';

function App() {
  
  const[cartItems,setCartItems]=useState([]);
  const[items, setItems]=useState([]);
  useEffect(()=>{
    const fetchItems= async () =>{
        const response= await axios.get("http://localhost:4000/items");
        const fetchedItems=response.data;
        setItems(fetchedItems);
    }
    const fetchCartItems= async ()=>{
      const response=await axios.get("http://localhost:4000/cart");
      const fetchedcartItems=response.data;
      console.log(fetchedcartItems);
      setCartItems(fetchedcartItems);
    }
    fetchItems();
    fetchCartItems();
  },[]);
 
   
  const handleAddToCart= async (item)=>{
    const existingCartItem=cartItems.find((cartItem)=>item.id===cartItem.itemId);
    if(existingCartItem)
    {
      increaseQuantity(existingCartItem);
    }
    else
    {
      addNewItem(item);
    }
  }
const increaseQuantity=async(existingCartItem)=>{
  const updatedCartItems=cartItems.map((cartItem)=>
  {
    return cartItem.itemId===existingCartItem.itemId?
    {...cartItem,quantity:cartItem.quantity+1}
    :cartItem;
  });
  const updatedCartItem=updatedCartItems.find((cartItem)=>cartItem.itemId===existingCartItem.itemId);
  const response = await axios.put(
    `http://localhost:4000/cart/${updatedCartItem.itemId}`,
    updatedCartItem
  );
  if (response.status < 400) {
    setCartItems(updatedCartItems);
  }
};
const addNewItem= async (item)=>{
  const cartItem={
    itemId:item.id,
    quantity:1,
  }
  const response=await axios.post("http://localhost:4000/cart",cartItem);
  if(response.status<400)
  {
    const updatedcartitem=[...cartItems,cartItem]
    setCartItems(updatedcartitem);
  }
};

  const setCartItemsValue=()=>{
    return cartItems.map((cartItem)=>{
      const item=items.find((item)=>item.id===cartItem.itemId);
      return {
        ...cartItem,
        name:item.name,
        description:item.description,
        price:item.price
      };

    });
  }
  
  return (
    <div className="App">
        <Nav/>
        <main className="App-content">
        <Switch>
        <Route
          path="/items"
          render={() => (
            <Items items={items} addItemsToCart={handleAddToCart} />
          )}
        ></Route>

        <Route
          path="/cart"
          render={() => <Cart cartItem={setCartItemsValue()} />}
        ></Route>

        <Redirect to="/items" />
        </Switch>
      
        </main>
    </div>
  );
}

export default App;
