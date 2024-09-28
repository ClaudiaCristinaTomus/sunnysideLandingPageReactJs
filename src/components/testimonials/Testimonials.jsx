import React from "react";
import "./Testimonials.css";
import menImg from "./../../images/men.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="title">CLIENT TESTIMONIALS</div>
        <div className="cards">
          <div className="card">
            <img className="imgMen" src={menImg} alt="men" />
            <div className="textCard">
              Incredible end result! Our sales increased
              over 400% when we worked with Sunnyside. Highly recommended!
            </div>
            <div className="nameCard">Thomas S.</div>
            <div className="positionCard">Chief Operating Officer</div>
          </div>
          <div className="card">
            <img className="imgMen" src={menImg} alt="men" />
            <div className="textCard">
        Incredible end result! Our sales increased
              over 400% when we worked with Sunnyside. Highly recommended!
            </div>
            <div className="nameCard">Thomas S.</div>
            <div className="positionCard">Chief Operating Officer</div>
          </div>
          <div className="card">
            <img className="imgMen" src={menImg} alt="men" />
            <div className="textCard">
            Incredible end result! Our sales increased
              over 400% when we worked with Sunnyside. Highly recommended!
            </div>
            <div className="nameCard">Thomas S.</div>
            <div className="positionCard">Chief Operating Officer</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
