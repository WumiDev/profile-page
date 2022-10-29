import React from 'react'
import profileImg from "../images/wumi.jpg"

export default function 
Main() {
  return (
    <>
        <header>
            <img src={profileImg} id="profile_img" alt="wumi"/>
            <h3>Wumi Ola</h3>
        </header>
        <main>
            <a href="https://twitter.com/WumiDev" id="twitter"><button>Twitter Link</button></a>
            <p id="slack">WumiDev</p>
            <button><a href="https://training.zuri.team/" id="btn_zuri">Zuri Team</a></button>
            <button><a href="https://books.zuri.team" id="books">Zuri Books</a></button>
            <button><a href="https://books.zuri.team/python-for-beginners?ref_id=wumidev" id="book_python">Python Books</a></button>
            <button><a href="https://background.zuri.team" id="pitch">Background Check for Coders</a></button>
            <button><a href="https://books.zuri.team/design-rules" id="book_design">Design Books</a></button>
            <a href="https://styling.zuri.team/design-rules" id="book_design"><button>Styling Books</button></a>

        </main>
    </>
  )
}