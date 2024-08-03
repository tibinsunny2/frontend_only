import React, { useState, useEffect } from "react";
import "./Cart.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
import { removeFromCart, clearCart } from "../Redux/actions";
import Product from "./Product";
import { loadStripe } from '@stripe/stripe-js';
function Cart() {
  const [FindData, setFindData] = useState([]);
  const [currentUser,setCurrentUser]=useState({})
  const [previousData,setPreviousData]=useState([])
  const { id } = useParams();
  const stripePromise = loadStripe('pk_test_51PcoRvRpo81QAel0VLznA5qE4BeVnT8R5mnXV5vLiqo0hTWHXCcabmyuLpQUHMkGeBa91jTKbIVcePhPMMc0nnZb00xVYL6WYq');

//   const cart=()=>{
// const existingId=localStorage.getItem("cartitem")
// console.log(existingId)
// setPreviousData(...previousData,existingId)
// localStorage.setItem("cartitem",previousData)
//   }
  useEffect(() => {
    axios.get(`/package-detail/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("key")}`,
      },
    }).then((data)=>{
       console.log(data)
       setFindData(data)
    })
   const user=localStorage.getItem("user")
   setCurrentUser(user)
   console.log(currentUser) 
  }
 
 , []);

  const handleClick = async () => {
    const stripe = await stripePromise;
const amount=FindData.data.amount
console.log(amount)
    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "1000", quantity: 1 }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/',
      cancelUrl: 'http://localhost:3000/products',
    });

    if (error) {
      console.error('Stripe Checkout Error:', error.message);
    }
  }
 return( <div>
    my orders

    <table>
      <thead>ORDERS</thead>
      <tbody>
        {
          FindData.length!==0? <tr>
          <th>Package name</th>
          <td>{FindData.data.title}</td>
          <th>Amount</th>
          <td>{FindData.data.amount}</td>
        </tr>:<div>No data found</div>
        }
       
      </tbody>
    </table>
    <button onClick={handleClick}></button>
    </div>)
}

export default Cart;
