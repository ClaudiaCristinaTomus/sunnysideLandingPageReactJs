import React from "react";
import imgOne from "./../../images/desktop/image-gallery-milkbottles.jpg";
import imgTwo from "./../../images/desktop/image-gallery-orange.jpg";
import imgThree from "./../../images/desktop/image-gallery-cone.jpg";
import imgFour from "./../../images/desktop/image-gallery-sugarcubes.jpg";
import "./Images.css";

const Images = () => {
  return (
    <>
     <div className="images">
      <img className="imgT" src={imgOne} alt="Milk Bottles" />
      <img className="imgT" src={imgTwo} alt="Orange" />
      <img className="imgT" src={imgThree} alt="Cone" />
      <img className="imgT" src={imgFour} alt="Sugar Cubes" />
    </div>
    </>
  );
};

export default Images;
