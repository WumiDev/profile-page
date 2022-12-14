import React from 'react'
import zuriLogo from "../images/zuri-internship-logo.png"
import i4gLogo from "../images/i4g.png"
import "../style.css"

export default function Footer() {
  return (
    <>
    {/* <div> */}
    <hr className="horizontalLine"></hr>
    {/* </div> */}
    <footer className="footer-container">
        <img src={zuriLogo} alt="zuri-internship logo"/>
        <span id="footer-text">HNG Internship 9 Frontend Task</span>
        <img src={i4gLogo} alt="i4g logo"/>
    </footer>
    </>
  )
}
