import React, { useState, useEffect } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./tour.css";
function Tour({ tour, fromDate, toDate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="tourcard">
        <div>
          <img src={tour.imageurls[0]} alt="" style={{ width: "100%" }} />
        </div>
        <div>
          <h1
            className="tourcard--headline"
            style={{ marginTop: "10px", color: "#0688b7", fontWeight: "bold" }}
          >
            {tour.name}
          </h1>
          <p className="tourcard--headline" style={{ fontSize: "14px" }}>
            From Lahore: Day Trip to {tour.name} with 8 places & Lunch
          </p>
          <p className="tourcard--headline">Contact Us : {tour.phonenumber}</p>

          <div style={{ float: "right" }}>
            {fromDate && toDate && (
              <Link to={`/booktour/${tour._id}/${fromDate}/${toDate}`}>
                <button>Book Now</button>
              </Link>
            )}

            <button
              onClick={handleShow}
              style={{ marginRight: "40px", marginLeft: "10px" }}
            >
              View Detail
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{tour.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {tour.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 bigimg"
                    src={url}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p style={{ fontSize: "16px", textAlign: "justify" }}>
            {tour.description}
          </p>
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

export default Tour;
