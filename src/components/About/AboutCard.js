import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Krithik</span>  
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am a Data Analyst with a strong background in software development.
            <br />
            <br />

            I hold a B.E. in Electronics and Communication Engineering from MNM Jain Engineering College, Chennai.
            <br />
            and NIIT Data Science
            <br />
            <br />
            Apart from data and code, here are some things I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Data Science and Machine Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Building web applications and automation tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and experiencing new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a meaningful difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akash Krithik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
