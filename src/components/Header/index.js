import React from "react";
import ProfilePic from "../../assets/images/profile_pic.jpg";
import {Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {Name, Position , Links } from "./header-components"

const Header = () => {
  return (
    <Row
      id="header-info"
      className="px-4 bg-white"
      style={{ paddingTop: "70px"}}
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
        {/* <Row className="sm-height d-sm-none d-md-block" style={{height: '200px'}}></Row> */}
        <Name />
        <Row id="description" className="mb-3 text-center">
          <Position />
          <Links />
        </Row>
        {/* <Row className="d-sm-none d-md-block" style={{height: '200px'}}></Row> */}
        <Row id="header-box" className="border-top text-center pt-3 text-muted">
          <Col xs={12} md={6} className="mb-3 header-info">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="text-dark-blue mr-3"/>
            <span className="font-weight-light">Miami, FL</span>
          </Col>
          {/* <Col xs={12} md={4} className="mb-3 header-info">
            <FontAwesomeIcon icon={faMobile} size="1x" className="text-dark-blue mr-3"/>
            <span className="font-weight-light">786.210.1141</span>
          </Col> */}
          <Col xs={12} md={6} className="mb-3 header-info px-md-2">
            <FontAwesomeIcon icon={faEnvelope} size="1x" className="text-dark-blue mr-3"/>
            <span className="font-weight-light">contact@keithcurbelo.com</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
