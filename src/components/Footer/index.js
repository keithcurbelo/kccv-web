import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import { ContactEmail, SocialMediaLinks, CopyRight } from "./footer-components";

export default () => {
  return (
    <footer id="footer" className="w-100">
      {/* <!------- Contact ------> */}
      <Row className="border-top bg-dark-blue text-light">
        <Col className="pt-0 pt-md-3 px-4">
          <ContactEmail />
          <SocialMediaLinks />
          <CopyRight />
        </Col>
      </Row>
    </footer>
  );
};
