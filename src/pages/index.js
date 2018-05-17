import React from 'react'
import Link from 'gatsby-link'

import circle from '../images/circle-02.png'
import scroll from '../images/Scroll.png'

import excel from '../images/excel.png'
import outlook from '../images/outlook.png'
import word from '../images/word.png'
import access from '../images/access.png'

import styled from 'styled-components'

const LandingWrapper = styled.div`
  h1 {
    font-size: 40px;
    font-weight: 400;
    color: #17191a;
  }

  h2 {
    font-size: 35px;
    font-weight: 400;
    color: #17191a;
  }

  h5 {
    font-size: 20px;
    font-weight: 400;
    color: #17191a;
  }

  p {
    color: #8f9ea5;
    opacity: 0.8;
    font-weight: 100;
    margin-top: 10px;
    font-size: 20px;
  }

  .landing {
    height: 100vh;
    position: relative;
  }

  .landingWrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }

  ul {
    list-style: none;
    margin-top: 30px;
    line-height: 30px;
  }

  .landingL {
    margin-top: 4em;
  }

  .scroll {
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .skills {
    text-align: center;
    margin-bottom: 20em;
  }

  .skills p {
    margin-bottom: 30px;
  }

  .skills img {
    width: 40px;
    margin: 0 15px;
  }
`

const IndexPage = () => (
  <LandingWrapper>
    <div className="landing">
      <div className="landingWrapper">
        <div className="landingL">
          <h1>Abriel John Gabriel</h1>
          <p>
            Hello, my name is AJ Gabriel. <br />I am a Service Desk Analyst<span
              className="blue"
              Product
              Designer
            />
          </p>
          <ul>
            <li>
              <p>Microsoft Office Applications</p>
            </li>
            <li>
              <p>Active Directory</p>
            </li>
            <li>
              <p>Computer Troubleshooting</p>
            </li>
            <li>
              <p>Service Now</p>
            </li>
          </ul>
        </div>
        <div className="landingR">
          <img src={circle} alt="Ethan Jones pic" width="300px" />
        </div>
        <img src={scroll} alt="scroll down" className="scroll" />
      </div>
    </div>

    <div className="skills">
      <h2>Skills</h2>
      <p>Over 2 years of troubleshooting for<br /> these programs. </p>
      <div className="programs">
        <img src={excel} alt="Xd icon" />
        <img src={outlook} alt="Ps icon" />
        <img src={word} alt="Ai icon" />
        <img src={access} alt="Ae icon" />
      </div>
    </div>
  </LandingWrapper>

  
)

export default IndexPage
