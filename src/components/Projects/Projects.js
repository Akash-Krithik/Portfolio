import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon.png";
import nlpbot from "../../Assets/Projects/nlpbot.png";
import football from "../../Assets/Projects/football.png";
import predictive from "../../Assets/Projects/predictive.png";
import invoice from "../../Assets/Projects/invoice.png";
import pharmtrac from "../../Assets/Projects/pharmtrac.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Featured Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects that highlight my skills in data analysis, automation, and development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Sales Data Analysis"
              description="Performed sales data analysis using Python, trained machine learning models, visualized insights in Tableau, and derived business strategies from revenue trends."
              ghLink="https://github.com/Akash-Krithik/amazon-sales-data-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predictive}
              isBlog={false}
              title="Predictive Data Analysis App"
              description="Developed a full-stack app using React.js and Flask to analyze datasets, apply preprocessing, visualize patterns, and train ML models with evaluation."
              ghLink="https://github.com/Akash-Krithik/Predictictive-Data-analysis-automated-data-cleaning."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlpbot}
              isBlog={false}
              title="NLP Chatbot using DialoGPT"
              description="Integrated a chatbot using Hugging Face DialoGPT and Flask. Designed to handle natural conversations using NLP techniques and fuzzy string matching."
              ghLink="https://github.com/Akash-Krithik/Portfolio-with-chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={false}
              title="Football Data Analysis"
              description="Analyzed football data using Python libraries and created visual dashboards in Tableau to extract performance metrics, player insights, and trends."
              ghLink="https://github.com/Akash-Krithik/football-data-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Emerson Invoice Application"
              description="Built an invoicing and archival system using PHP and Laravel. Implemented features for invoice generation, report backups, and file handling."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharmtrac}
              isBlog={false}
              title="PharmTracQR"
              description="Developed a QR code tracking platform for pharma supply chains with Laravel 11 and React.js. Enabled role-based access, data upload, and label generation."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
