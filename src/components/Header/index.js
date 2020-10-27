import React from "react";
import ProfilePic from "../../assets/images/profile_pic.jpg";
import {Row, Col, Image } from "react-bootstrap"
import {Name, Position , Links , ContactInfo, MainQuote} from "./header-components"

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
        <MainQuote />
      </Col>
      <Col xs={12} md={8} className="bg-white header-deatils">
        <Name />
        <Row id="description" className="mb-3 text-center">
          <Position />
          <Links />
        </Row>
        <ContactInfo/>
      </Col>
    </Row>
  );
};

export default Header;
