import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../../assets/images/profile/dummy-profile.png";
import Image from "react-bootstrap/Image";
import "./About.styles.css";

export const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center m-auto">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="about__text p-2 my-details rounded">
                <h4>
                  Hi! I am <strong>&nbsp;Keyur Machhi</strong>
                </h4>
                <p>
                  I am Full stack developer with industry experience in building
                  websites, web applications. I have professional experience
                  working with Java, SQL, web frameworks like Spring, Hibernate,
                  Angular 2+.
                </p>
                <span className="about__contact">
                  <h6>
                    Contact No: <span>+919104452374</span>
                  </h6>
                </span>
                <span className="about__contact">
                  <h6>
                    Email: <span>keyurmachhi123@gmail.com</span>
                  </h6>
                </span>
                <div className="m-auto pt-3">
                  <a
                    href="#"
                    className="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-download"></i> Resume
                  </a>
                  <a
                    href="https://github.com/Keyur996"
                    className="btn btn-outline-info ml-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-info ml-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
