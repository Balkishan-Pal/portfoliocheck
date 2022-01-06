import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.png"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
       
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Balkishan Pal, a software engineer. I
              develop web applications.I have graduated with a bachelor's degree
              in Computer Science Engineering from Rajiv Gandhi University at
              Bhopal, India.
               <br></br>
               In my free time i love to play football,
                watch movies on netflix or listen to music.
               <br></br>
               <br></br>
              I am Looking forward to take up a challenging role in a company, where i can contribute and gain development experience.
            </p>
            <div className="about-action">
              <Button
                link="https://github.com/Balkishan-Pal/portfoliocheck/raw/master/zonayed.me-master/src/data/file/MyResume.pdf"
                target=""
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
