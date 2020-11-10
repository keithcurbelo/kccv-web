import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactEmail = () => (
  <Row className="row text-center text-theme">
    <Col>
      <FontAwesomeIcon icon={["fas", "envelope"]} size="1x" />
      <span className="font-weight-light ml-2">contact@keithcurbelo.com</span>
    </Col>
  </Row>
);
