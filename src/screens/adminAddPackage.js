import React, { useState, useEffect } from "react";
import "./adminaddpackage.css";
import axios from "axios";

function AdminAddPackage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [Title, setTitle] = useState("");
  const [About, setAbout] = useState("");
  const [Amount, setAmount] = useState("");
  const [Rating, setRating] = useState("");
  const [Location, setLocation] = useState("");
  const [Hotel_name, setHotel] = useState("");
  const [Hotel_rating, setHotel_rating] = useState("");
  const [hotel_desc, setHotel_desc] = useState("");
  const [hotel_place, setHotel_place] = useState("");
  const [desc_food, setDesc_food] = useState("");
  const [veg, setVeg] = useState("");
  const [non_veg, setNon_veg] = useState("");
  const [Duration, setDuration] = useState("");
  const [No_of_people, setNo_of_people] = useState("");
  const [ImageForms, setImageForms] = useState({
    hotel: null,
    destination: null,
    activity: null,
    attraction: null,
  });

  const ImageFeeding = (e) => {
    e.preventDefault();
    setImageForms({
      ...ImageForms,
      [e.target.name]: e.target.files[0],
    });
    console.log(ImageForms);
  };

  async function Addpackage() {
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    // formData.append("hotel", ImageForms.hotel);
    // formData.append("destination", ImageForms.destination);
    // formData.append("activity", ImageForms.activity);
    formData.append("attraction", ImageForms.attraction);
    formData.append("hotel", ImageForms.hotel);
    formData.append("destination", ImageForms.destination);
    formData.append("activity", ImageForms.activity);
    formData.append("title", Title);
    formData.append("about", About);
    formData.append("amount", Amount);
    formData.append("rating", Rating);
    formData.append("location", Location);
    formData.append("duration", Duration);
    formData.append("hotel_title", Hotel_name);
    formData.append("hotel_rating", Hotel_rating);
    formData.append("hotel_desc", hotel_desc);
    formData.append("hotel_place", hotel_place);
    formData.append("veg", veg);
    formData.append("non_veg", non_veg);
    formData.append("desc_food", desc_food);
   

    try {
       console.log(formData);
      const result = await fetch("package-crud/", {
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminkey")}`,
        },
        body: formData,
      });

      const data = await result.json();
      console.log(data);

      if (data.errors) {
        console.log(
          Object.keys(data.errors).map((item) => {
            alert(item);
          })
        );
      } else {
        console.log(data);
        alert("package added succesfully");
        if (data.detail) {
          alert(data.detail);
        }
        // window.location.href = "/login";
      }
    } catch (error) {
      console.log("An error occurred:", error);
      setError("An error occurred while adding the package");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register">
      {/* <img src={Register} alt="register image" className="register--img" /> */}
      {/* {loading && <Loader></Loader>} */}
      {/* {error.length > 0 && <Error msg={error}></Error>} */}

      <div id="row" className="row justify-content-center ">
        <div className="col-md-6 mt-5">
          {/* {success.length > 0 && <Success msg={success}></Success>} */}
          <div id="wq" className="bs">
            <h2 style={{ textDecoration: "underline" }}>Add packages..</h2>
            <form enctype="multipart/form-data" onSubmit={Addpackage}>
              <input
                type="text"
                className="form-control"
                placeholder="title"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={{
                  padding: "20px",
                  border: "none",
                  marginBottom: "20px",
                }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="about"
                name="about"
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                style={{
                  padding: "20px",
                  border: "none",
                  marginBottom: "20px",
                }}
              />
              <input
                type="number"
                className="form-control"
                placeholder="rating"
                required
                name="rating"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="location"
                required
                name="location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="text"
                className="form-control"
                placeholder="duration"
                required
                name="duration"
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                required
                name="amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <p style={{ color: "white" }}>Hotel details</p>
              <input
                type="string"
                className="form-control"
                placeholder="Enter hotel name"
                required
                name="hotel_title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                className="form-control"
                placeholder="hotel rating"
                required
                name="hotel_rating"
                onChange={(e) => {
                  setHotel_rating(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                className="form-control"
                placeholder="Enter a discription about the hotel"
                required
                name="hotel_desc"
                onChange={(e) => {
                  setHotel_desc(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                className="form-control"
                placeholder="Enter address"
                required
                name="hotel_place"
                onChange={(e) => {
                  setHotel_place(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <p style={{ color: "white" }}>Food Details</p>
              <input
                className="form-control"
                placeholder="Enter details of veg"
                required
                name="Veg"
                onChange={(e) => {
                  setVeg(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                className="form-control"
                placeholder="Enter details of non-veg"
                required
                name="non_veg"
                onChange={(e) => {
                  setNon_veg(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                className="form-control"
                placeholder="Food details"
                required
                name="desc_food"
                onChange={(e) => {
                  setDesc_food(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              />

              {/* <input
                type="text"
                className="form-control"
                placeholder="no_of_people"
                required
                name="no_of_people"
                onChange={(e) => {
                  setNo_of_people(e.target.value);
                }}
                style={{ padding: "20px", marginBottom: "20px" }}
              /> */}
              <label style={{ color: "white", fontSize: ".7rem" }}>
                select attraction
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="attraction"
                required
                name="attraction"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="file"
                className="form-control"
                placeholder="activity"
                name="activity"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="file"
                className="form-control"
                name="hotel"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <input
                type="file"
                className="form-control"
                placeholder="destination"
                name="destination"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <p style={{ color: "white" }}>Select the hotel image</p>
              <input
                type="file"
                className="form-control"
                name="hotel"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <p style={{ color: "white" }}>Select the veg food image</p>
              <input
                type="file"
                className="form-control"
                name="imgveg"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
              <p style={{ color: "white" }}>Select the non-veg food image</p>
              <input
                type="file"
                className="form-control"
                name="imgnon_veg"
                onChange={ImageFeeding}
                style={{ padding: "20px", marginBottom: "20px" }}
              />
            </form>

            {loading ? (
              <div>Registering... Please Wait...</div>
            ) : (
              <button className=" register--btn" onClick={Addpackage}>
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddPackage;
