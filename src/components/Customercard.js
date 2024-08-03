import React from "react";
import "./customercard.css";
import guide1 from "../../src/images/Guide1.jpg";
export default function Customercard({item}) {
  return (
    <div className="customer--card">
      <div className="rating">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/300px-Star%2A.svg.png?20070316213819"
          className="star"
          alt="Star"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/300px-Star%2A.svg.png?20070316213819"
          className="star"
          alt="Star"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/300px-Star%2A.svg.png?20070316213819"
          className="star"
          alt="Star"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/300px-Star%2A.svg.png?20070316213819"
          className="star"
          alt="Star"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/300px-Star%2A.svg.png?20070316213819"
          className="star"
          alt="Star"
        />
      </div>
      <div className="review">
        <p>
         {item.review}
        </p>
        <p> email : {item.email}</p>
      </div>
      <div className="customer">
        <img src={guide1} alt="Customer" />
        <h5>{item.name}</h5>
      
      </div>
    </div>
  );
}
