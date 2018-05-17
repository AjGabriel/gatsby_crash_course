import React from 'react'
import Link from 'gatsby-link'
import chatBlue from '../images/Chat_Blue.png'
import youtubeGray from '../images/Youtube_Gray.png'
import beGray from '../images/Be_Gray.png'
import dribGray from '../images/Dribbble_Gray.png'

const Header = ({ siteTitle }) => (
  <div>
          <div className="nav">
            <div className="contactMe">
              <a href="#">
                <img src={chatBlue} alt="chat logo" />Contact Me
              </a>
            </div>
            <div className="navIcons">
              <a href="#">
                <img src={youtubeGray} alt="youtube logo" />
              </a>
              <a href="#">
                <img src={beGray} alt="behance logo" />
              </a>
              <a href="#">
                <img src={dribGray} alt="dribble logo" />
              </a>
            </div>
          </div>

  </div>
)

export default Header
