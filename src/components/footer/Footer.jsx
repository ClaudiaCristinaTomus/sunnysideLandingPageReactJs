import React from 'react'
import imgIcons from "./../../images/icons.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='sunny'>sunnyside</div>
        <div className='ul'>
            <p className='ulul'>About</p>
            <p className='ulul'>Services</p>
            <p className='ulul'>Projects</p>
        </div>
        <img className="imgFooter" src={imgIcons} alt="Milk Bottles" />
    </div>

    </>
  )
}

export default Footer