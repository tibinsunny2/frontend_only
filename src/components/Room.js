import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel, CarouselItem } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./room.css";
function Room({ room, fromDate, toDate }) {
  console.log(room);
  const [show, setShow] = useState(false);
  const [Flag, setFlag] = useState("");
  const [Flag1, setFlag1] = useState("");
  const [Flag2, setFlag2] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(async(e) => {

    fetch(`https://api.pexels.com/v1/search?query=${room.name}+flag`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "CaI2UUZai3U9L9vcm03Bbf9fEP9plQYr1b9Ca5G2YSyAaY5eYqqQ4Xgt",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFlag(data.photos[0].src.large);
        setFlag1(data.photos[1].src.large);
        setFlag2(data.photos[2].src.large); 
      }).catch(()=>{
console.log("something went wrong...image fetching failed");
setFlag("");
        setFlag1("");
        setFlag2(""); 
      })
   
  }, []);

  return (
    <>
      <div>
        <div className="hotel--card">
          <img id="img1" src={Flag} className="smallimg" alt="" />
          <div style={{ padding: "20px" }}>
            <h1 id="hed">{room.name}</h1>
            <>
              {Object.entries(room.advisory).map((content) => {
                return (
                  <p>
                    {content[0]} : {content[1]}
                  </p>
                );
              })} 
            </>
           <div style={{ float: "right", }}>
              <button onClick={handleShow}>View image</button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={Flag}
                alt="First slide"
              />
            
            </Carousel.Item>
            <Carousel.Item>
               <img
                className="d-block w-100 bigimg"
                src={Flag1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
               <img
                className="d-block w-100 bigimg"
                src={Flag2}
                alt="First slide"
              />
            </Carousel.Item>
           
          </Carousel>
          <p> Safety Score : {room.advisory.score}</p>
          <p> Safety Score : </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Room;
