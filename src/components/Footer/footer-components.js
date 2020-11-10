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

export const SocialMediaIcon = ({ url, icon, size }) => (
  <a href={url} target="_blank" className="mr-3 text-white">
    <FontAwesomeIcon icon={icon} size={size} />
  </a>
);

export const SocialMediaLinks = () => (
  <Row className="text-center my-2">
    <Col>
      <SocialMediaIcon
        icon={["fab", "linkedin"]}
        size="2x"
        url={"https://www.linkedin.com/in/keithcurbelo"}
      />
      <SocialMediaIcon
        icon={["fab", "github"]}
        size="2x"
        url={"https://github.com/keithcurbelo"}
      />
      <SocialMediaIcon
        icon={["fab", "facebook-f"]}
        size="2x"
        url={"https://www.facebook.com/keith.curbelo"}
      />
    </Col>
  </Row>
);

export const CopyRight = () => (
  <Row className="d-flex align-items-end">
    <Col className="text-center text-muted">
      <small> Keith Curbelo {new Date().getFullYear()}</small>
    </Col>
  </Row>
);
