import React from "react";
import axios from "axios";
import "./contact.css";
export default function Register() {
  const [FormData, setFormData] = React.useState({
    name: "",
    email: "",
    review: "",
  });

  function handleChange(e) {
    setFormData({
      ...FormData,
      [e.target.name]:e.target.value
    })
    console.log(FormData);
  }

  const Submit=((e)=>{
e.preventDefault()
const {name,email,review}=FormData
axios.post('create-review/',{
  name,
  email,
  review
}).then((res)=>{
  console.log(res.data)
  alert("comment added successfully")
  window.location.reload()
}).catch(()=>{
  alert("add all fields correctly and chech your connection")
})
  })

  return (
    <div className="contact" style={{ backgroundColor: "#f2fcfe" }}>
      <div className="contact--form">
        <h2
          style={{
            marginBottom: "35px",
            marginTop: "20px",
            textAlign: "center",
            padding: "30px",
            color: "#6986b6",
            fontSize: "32px",
          }}
        >
          Comment on us
        </h2>
        <form className="contact-form-fields">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={FormData.name}
            placeholder="Name"
            className="field"
            style={{ padding: "20px", border: "1px solid #eee" }}
          />

          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={FormData.email}
            placeholder="Email"
            className="field"
            style={{ padding: "20px", border: "1px solid #eee" }}
          />

          <textarea
            type="text"
            name="review"
            onChange={handleChange}
            value={FormData.review}
            className="field"
            placeholder="Add your Comments"
          ></textarea>
          <button className="contact--btn" onClick={Submit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
