import React from "react";
import "./BrandAudience.css";
import transform from "./../../images/desktop/image-transform.jpg";
import stand from "./../../images/desktop/image-stand-out.jpg";
const BrandAudience = () => {
  return (
    <>
      <div className="brand">
        <div className="leftBrand">
          <div className="textBrand">
            <h2 className="titleBrand">Transform your brand</h2>
            <p className="paragraphBrand">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="styleCTA">
              <div className="ctaBrand">LEARN MORE</div>
              <div className="lineCTA"></div>
            </div>
          </div>
        </div>
        <div className="rightBrand">
          <img className="imgBrand" src={transform} alt="egs" />
        </div>
      </div>
      <div className="audience">
        <div className="leftAudience">
          <img className="imgAudience" src={stand} alt="img" />
        </div>
        <div className="rightAudience">
        <div className="textAudience">
          <h2 className="titleAudience">Stand out to the right audience</h2>
          <p className="paragraphAudience">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="styleCTA">
              <div className="ctaBrand">LEARN MORE</div>
              <div className="lineCTA"></div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default BrandAudience;
