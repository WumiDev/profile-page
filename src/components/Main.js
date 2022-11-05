import React from 'react'
import slackIcon from "../images/slack-icon.png"
import githubIcon from "../images/github-icon.png"
import "../style.css"

export default function 
Main() {
  return (
    <section className="section-container">
        <header className="header-container">
        <div id="avatar_share"></div>
            <div id="profile__img"></div>
            <h3 id="twitter">WumiDev</h3>
            <p id="slack">WumiDev</p>
        </header>

        <main className="main-container">
            <a href="https://twitter.com/WumiDev" id="btn__twitter">Twitter Link</a>
            <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
            <a href="https://books.zuri.team" id="books">Zuri Books</a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=wumidev" id="book__python">Python Books</a>
            <a href="https://background.zuri.team" id="pitch">Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
            <a href="/contact" id="contact">Contact Me</a>

            <div className="socials-container">
                <img src={slackIcon} className="social-icon" alt="slack icon"/>
                <a href="https://github.com/WumiDev"><img src={githubIcon} className="social-icon" alt="github icon"/></a>
            </div>
        </main>
    </section>
  )
}