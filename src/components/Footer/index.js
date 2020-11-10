import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import { ContactEmail } from "./footer-components";

export default () => {
  return (
    <footer id="footer" className="w-100">
      {/* <!------- Contact ------> */}
      <Row className="border-top bg-dark-blue text-light">
        <Col className="pt-0 pt-md-3 px-4">
          <ContactEmail />
          <Row className="text-center my-2">
            <Col>
              <a
                href="https://www.linkedin.com/in/keithcurbelo"
                target="_blank"
                className="mr-3 text-white"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              </a>
              <a
                href="https://github.com/keithcurbelo"
                target="_blank"
                className="mr-3 text-white"
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/keith.curbelo"
                target="_blank"
                className="text-white"
              >
                <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />
              </a>
            </Col>
          </Row>
          <Row className="d-flex align-items-end">
            <Col className="text-center text-muted">
              <small> Keith Curbelo {new Date().getFullYear()}</small>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};
