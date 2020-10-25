import React from "react";
import ProfilePic from "../assets/images/profile_pic.jpg";
import {Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Row
      id="header-info"
      className="px-4 bg-white"
      style={{ paddingTop: "70px" }}
    >
      <Col xs={12} md={4} className="text-center" style={{ height: "180px" }}>
        <Row className="sm-height d-none d-md-block"></Row>
        <Image
          src={ProfilePic}
          id="profile-pic"
          alt="profile_pic"
          className="shadow"
          roundedCircle
        />
        <Row className="lg-height d-sm-none d-md-block">
          <Col xs={11} className="d-flex align-items-end h-100 float-right">
            <blockquote className="blockquote text-right d-none d-md-block header-info">
              <p className="mb-0 text-muted handwriting">
                If I had asked people what they wanted, they would have said
                faster horses.
              </p>
              <footer className="blockquote-footer font-italic">
                <small>
                  <cite title="Source Title">Henry Ford</cite>
                </small>
              </footer>
            </blockquote>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={8} className="bg-white header-deatils">
        <Row className="sm-height d-sm-none d-md-block"></Row>
        <Row>
          <Col xs={12} className="text-center text-md-left">
            <h1 className="text-center text-md-left">
              <span className="media font-weight-light text-muted">Keith</span>
              <span className="media text-uppercase text-theme sharpie">
                Curbelo
              </span>
            </h1>
          </Col>
        </Row>
        <Row className="mb-3 text-center">
          <Col xs={12} md={6} className="font-weight-light text-md-left text-muted">
            <div className="media manuscript">
              Web & Mobile Application Developer
            </div>
          </Col>
          <Col id="header-icons" xs={12} md={6} className="mt-3 mt-md-0 text-md-right">
            <span className="mr-3 d-inline-block d-md-block">
              <a
                href="https://www.linkedin.com/in/keithcurbelo"
                target="_blank"
                className="media-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
            </span>
            <span className="mr-3 d-inline-block d-md-block">
              <a
                href="https://www.facebook.com/keith.curbelo"
                target="_blank"
                className="media-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x"/>
              </a>
            </span>
            <span className="mr-0 mr-md-3 d-inline-block d-md-block">
              <a
                href="https://drive.google.com/file/d/1jgcC__spBqBppKc6cX3PDpK8fS2CN7ud/view?usp=sharing"
                target="_blank"
                className="media-icon"
              >
                <FontAwesomeIcon icon={faFileAlt} size="2x"/>
              </a>
            </span>
          </Col>
        </Row>
        <Row className="md-height d-sm-none d-md-block"></Row>
        <Row id="header-box" className="border-top text-center pt-3 text-muted">
          <Col xs={12} md={4} className="mb-3 header-info">
            {/* <h6 className="text-dark-blue">Location</h6>  */}
            <i className="fas fa-map-marker-alt fa-1x text-dark-blue"></i>
            <span className="font-weight-light">Miami, FL</span>
          </Col>
          <Col xs={12} md={4} className="mb-3 header-info">
            {/* <h6 className="text-dark-blue">Phone</h6>  */}
            <i className="fas fa-mobile-alt fa-1x text-dark-blue"></i>
            <span className="font-weight-light">786.210.1141</span>
          </Col>
          <Col xs={12} md={4} className="mb-3 header-info px-md-2">
            {/* <h6 className="text-dark-blue">E-Mail</h6> */}
            <i className="fas fa-envelope fa-1x text-dark-blue"></i>
            <span className="font-weight-light">contact@keithcurbelo.com</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
