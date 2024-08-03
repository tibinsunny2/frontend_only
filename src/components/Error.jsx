import React from "react";
import "./error.css";
export default function Error({ msg }) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        <h1>Something went wrong, please try again. {msg}</h1>
      </div>
    </div>
  );
}
