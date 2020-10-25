import React, { Fragment } from "react";
import ProfilePic from "../assets/images/profile_pic.jpg";
import {Row, Col, Image } from "react-bootstrap"

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
          <div className="col-11 d-flex align-items-end h-100 float-right">
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
          </div>
        </Row>
      </Col>
      <Col xs={12} md={8} className="bg-white header-deatils">
        <div className="row sm-height d-sm-none d-md-block"></div>
        <div className="row">
          <div className="col-12 text-center text-md-left">
            <h1 className="text-center text-md-left">
              <span className="media font-weight-light text-muted">Keith</span>
              <span className="media text-uppercase text-theme sharpie">
                Curbelo
              </span>
            </h1>
          </div>
        </div>
        <div className="row mb-3 text-center">
          <div className="col-12 col-md-6 font-weight-light text-md-left text-muted">
            <div className="media manuscript">
              Web & Mobile Application Developer
            </div>
          </div>
          <div
            id="header-icons"
            className="col-12 col-md-6 mt-3 mt-md-0 text-md-right"
          >
            <span className="mr-3 d-inline-block d-md-block">
              <a
                href="https://www.linkedin.com/in/keithcurbelo"
                target="_blank"
                className="media-icon"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </span>
            <span className="mr-3 d-inline-block d-md-block">
              <a
                href="https://www.facebook.com/keith.curbelo"
                target="_blank"
                className="media-icon"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </span>
            <span className="mr-0 mr-md-3 d-inline-block d-md-block">
              <a
                href="https://drive.google.com/file/d/1jgcC__spBqBppKc6cX3PDpK8fS2CN7ud/view?usp=sharing"
                target="_blank"
                className="media-icon"
              >
                <i className="far fa-file-alt fa-2x"></i>
              </a>
            </span>
          </div>
        </div>
        <div className="row md-height d-sm-none d-md-block"></div>
        <Row id="header-box" className="border-top text-center pt-3 text-muted">
          <div className="col-12 col-md-4 mb-3 header-info">
            {/* <h6 className="text-dark-blue">Location</h6>  */}
            <i className="fas fa-map-marker-alt fa-1x text-dark-blue"></i>
            <span className="font-weight-light">Miami, FL</span>
          </div>
          <div className="col-12 col-md-4 mb-3 header-info">
            {/* <h6 className="text-dark-blue">Phone</h6>  */}
            <i className="fas fa-mobile-alt fa-1x text-dark-blue"></i>
            <span className="font-weight-light">786.210.1141</span>
          </div>
          {/* <div className="col-12 col-md-3 mb-3">
                    <h6 className="">Website</h6>
                    <span className="font-weight-light">www.keithcurbelo.com</span>
                </div> */}
          <Col xs={12} md={4} className="mb-3 header-info px-md-2">
            {/* <h6 className="text-dark-blue">E-Mail</h6> */}
            <i className="fas fa-envelope fa-1x text-dark-blue"></i>
            <span className="font-weight-light">contact@keithcurbelo.com</span>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default Header;
