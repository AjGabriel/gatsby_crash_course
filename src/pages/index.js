import React from 'react'
import Link from 'gatsby-link'

import circle from '../images/circle-02.png'
import scroll from '../images/Scroll.png'

import excel from '../images/excel.png'
import outlook from '../images/outlook.png'
import word from '../images/word.png'
import access from '../images/access.png'

const IndexPage = () => (
  <div>
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
  </div>

  
)

export default IndexPage
