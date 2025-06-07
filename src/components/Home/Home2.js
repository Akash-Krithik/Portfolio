import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Data Analyst</b> with a strong foundation in software development. I specialize in extracting actionable insights from data and building intelligent systems.
              <br />
              <br />
              I'm skilled in tools like{" "}
              <i>
                <b className="purple">Python, SQL, Tableau, and Excel</b>
              </i>{" "}
              and proficient with libraries like{" "}
              <i>
                <b className="purple">Pandas, NumPy, Matplotlib, Seaborn</b>
              </i>
              .
              <br />
              <br />
              My passion lies in{" "}
              <i>
                <b className="purple">
                  Data Visualization, Predictive Modeling, and Business Intelligence.
                </b>
              </i>{" "}
              I'm also experienced in building full-stack apps using{" "}
              <b className="purple">React.js, Flask, and Laravel</b>.
              <br />
              <br />
              I enjoy solving real-world problems using{" "}
              <i>
                <b className="purple">machine learning</b>
              </i>{" "}
              and love automating workflows to improve productivity.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Akash-Krithik"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash-krithik-344486214/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/akash_02_prvt?igsh=eWZqYW44bXBvcTQz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
