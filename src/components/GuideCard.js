import React from "react";
import "./guidecard.css";
import guide1 from "../../src/images/Guide1.jpg";
export default function GuideCard(props) {
  const [guide, setguide] = React.useState(props);
  console.log(guide.name);
  function toggleInfo() {
    setguide(() => {
      return {
        ...guide,
        isContact: !guide.isContact,
      };
    });
  }
  return (
    <div className="guidecard">
      <div className="guide--card">
        <div className="guidecard--header">
          <img src={guide1} className="guidecard--img" alt="Guide" />
        </div>
        <div className="guidecard--data">
          <h3>{guide.name}</h3>
          <p style={{ fontWeight: "bold" }}>Location: {guide.location}</p>
          {guide.isContact === true && <p>{guide.email}</p>}
          {guide.isContact === true && <p>{guide.phone}</p>}
        </div>
        <div className="guidecard--btn">
          <button onClick={toggleInfo} className="guide--btn">
            View Contact
          </button>
        </div>
      </div>
    </div>
  );
}
