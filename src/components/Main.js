import React from 'react'
import profileImg from "../images/wumi.jpg"
import slackIcon from "../images/slack-icon.png"
import githubIcon from "../images/github-icon.png"
import avatarShareBtn from "../images/avatar-share-btn.svg"
import avatarShareBtn2 from "../images/avatar-share-btn_mobile.svg"
import cameraImg from "../images/camera-icon.svg"
import "../style.css"

export default function 
Main() {
  return (
    <section className="section-container">
        <header className="header-container">
        <div id="avatar_share"></div>
        {/* <img src={avatarShareBtn} id="avatar_share" alt="avatar share btn"/>
            <img src={avatarShareBtn2} id="avatar_share_mobile" alt="avatar share btn"/> */}
            <div id="profile__img"></div>
            <h3 id="twitter">WumiDev</h3>
            <p id="slack">WumiDev</p>
        </header>

        <main className="main-container">
            <a href="https://twitter.com/WumiDev" id="btn_twitter">Twitter Link</a>
            <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
            <a href="https://books.zuri.team" id="books">Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=wumidev" id="book__python">Python Books</a>
            <a href="https://background.zuri.team" id="pitch">Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>

            <div className="socials-container">
                <img src={slackIcon} className="social-icon" alt="slack icon"/>
                <a href="https://github.com/WumiDev"><img src={githubIcon} className="social-icon" alt="github icon"/></a>
            </div>
        </main>
    </section>
  )
}