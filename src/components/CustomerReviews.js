import React,{useEffect,useState} from "react";
import "./customer.css";
import CustomerCard from "./Customercard";
import axios from "axios";
const CustomerReviews = () => {
const [Data,setData]=useState()

useEffect(() => {
  axios.get('list-reviews/')
  .then((res)=>{
    setData(res.data)
  })
}, [])


  return (
    <div className="customer--reviews">
      <h2 style={{ textAlign: "center" }}>What People are Saying</h2>
      <p style={{ textAlign: "center", fontSize: "14px", wordSpacing: "2px" }}>
        After Providing services to more than 1.6K people in the last six months
        we have got some feedback from our cutomers.
      </p>
      <hr
        style={{
          width: "30%",
          marginTop: "20px",
          marginLeft: "35%",
        }}
      />
      <div className="reviews-flex">
        {
         Data? Data.map((item)=>{
            console.log(item)
           return  <CustomerCard item={item} />
          }):""
        
        }
      </div>
    </div>
  );
};

export default CustomerReviews;
