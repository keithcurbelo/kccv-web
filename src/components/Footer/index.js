import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";

export default () => {
  return (
    <footer id="footer" className="w-100">
      {/* <!------- Contact ------> */}
      <Row className="border-top bg-dark-blue text-light">
        {/* <Col xs={12} md={4} className="px-4 py-3 text-md-right sm-height">
          <h3>Contact</h3>
          <span className="font-weight-light"> </span>
        </Col> */}
        <Col className="pt-0 pt-md-3 px-4">
          <Row className="row text-center text-theme">
            {/* <div className="col-12 col-md-6 mb-3">
              <p className="font-weight-light">
                <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="1x" />{" "}
                786.210.1141
              </p>
            </div> */}

            <Col>
              {/* <!-- <h6 className="">E-Mail</h6> --> */}
              <FontAwesomeIcon icon={["fas", "envelope"]} size="1x" />
              <span className="font-weight-light ml-2">
                contact@keithcurbelo.com
              </span>
            </Col>
          </Row>
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
