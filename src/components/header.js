import React from 'react'
import Link from 'gatsby-link'
import chatBlue from '../images/Chat_Blue.png'
import youtubeGray from '../images/Youtube_Gray.png'
import beGray from '../images/Be_Gray.png'
import dribGray from '../images/Dribbble_Gray.png'

import styled from 'styled-components'

const HeaderWrapper = styled.div`
  .nav {
    display: flex;
    align-items: center;
    height: 100px;
  }

  .contactMe,
  .navIcons {
    flex: 1;
  }

  .navIcons {
    text-align: right;
  }

  .contactMe a, .contactMe img {
    vertical-align: middle;
    line-height: 1.5rem;
  }

  .navIcons a {
    display: inline-block;
    vertical-align: middle;
  }

  .navIcons a {
    margin-left: 40px;
  }

  .contactMe a {
    color: #027bff;
    text-decoration: none;
  }

  .contactMe img {
    margin-right: 10px;
  }
`


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
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

  </HeaderWrapper>
)

export default Header
