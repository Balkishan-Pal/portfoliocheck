import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-details">
            <ul>
              <li>
                <h5>
                  <a target="_blank" href="https://gmail.com/">
                <img src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5 style={{marginLeft: "2px"}}>
                  <a target="_blank" 
                  href="https://github.com/Balkishan-Pal">
                <img src="https://img.icons8.com/small/48/ffffff/github.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank" 
                  href="https://www.linkedin.com/in/balkishanpal/">
                <img src="https://img.icons8.com/ios-glyphs/48/4a90e2/linkedin.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank"
                   href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.1993477,77.2658056,11z/data=!3m1!4b1!4m5!3m4!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615">
                <img src="https://img.icons8.com/external-justicon-flat-justicon/48/4a90e2/external-gps-map-and-location-justicon-flat-justicon.png"/>
                </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className="contact-status">
            <p>
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:balkishanpal3@gmail.com"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }