import React from "react";
import graphic from "./../../images/desktop/image-graphic-design.jpg";
import photo from "./../../images/desktop/image-photography.jpg";
import "./Grafic.css";

const Grafic = () => {
  return (
    <>
      <div className="allGraphic">
        <div className="graphic">
            <img className="imgGraphic " src={graphic} alt="img" />
            <div className="textGraphic">
              <div className="titleGraphic">Graphic design</div>
              <div className="paragraphGraphic">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </div>
            </div>
        </div>
        <div className="photo">
          <img className="imgPhoto" src={photo} alt="img" />
          <div className="textPhoto">
            <div className="titlePhoto">Photography</div>
            <div className="paragraphPhoto">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grafic;
