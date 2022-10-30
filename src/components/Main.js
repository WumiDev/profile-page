import React from 'react'
import profileImg from "../images/wumi.jpg"
import slackIcon from "../images/slack-icon.png"
import githubIcon from "../images/github-icon.png"

export default function 
Main() {
  return (
    <>
        <header>
            <img src={profileImg} id="profile_img" alt="wumi"/>
            <h3>Wumi Ola</h3>
            <p id="slack" className="invisible">WumiDev</p>
        </header>

        <main>
            <a href="https://twitter.com/WumiDev" id="twitter"><button>Twitter Link</button></a>
            <a href="https://training.zuri.team/" id="btn_zuri"><button>Zuri Team</button></a>
            <a href="https://books.zuri.team" id="books"><button>Zuri Books</button></a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=wumidev" id="book_python"><button>Python Books</button></a>
            <a href="https://background.zuri.team" id="pitch"><button>Background Check for Coders</button></a>
            <a href="https://books.zuri.team/design-rules" id="book_design"><button>Design Books</button></a>
            <a href="#"><img src={slackIcon} id="slack" alt="slack icon"/></a>
            <a href="https://github.com/WumiDev"><img src={githubIcon} id="github" alt="github icon"/></a>
        </main>
    </>
  )
}