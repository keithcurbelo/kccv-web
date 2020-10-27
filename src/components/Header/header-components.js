import React from "react";
import {Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export const Name = () =>(
    <Row id="profile-name">
        <Col xs={12} className="text-center text-md-left">
            <h1 className="text-center text-md-left">
                <span className="media font-weight-light text-muted">Keith</span>
                <span className="media text-uppercase text-theme sharpie">
                Curbelo
                </span>
            </h1>
        </Col>
   </Row>
)

export const Position = () =>(
    <Col xs={12} md={6} className="font-weight-light text-md-left text-muted">
        <div className="media manuscript">
            Web & Mobile Application Developer
        </div>
  </Col>
)

export const MediaIcon = ({ className, icon, link,iconSize, ...props}) => (
    <span {...props} className={"mr-3 d-inline-block d-md-block " + className} style={{height: '50px'}}>
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="media-icon"
        >
        <FontAwesomeIcon icon={icon} size={iconSize}/>
        </a>
    </span>
)

export const Links = ()=> (
    <Col id="header-icons" xs={12} md={6} className="mt-3 mt-md-0 text-md-right ">
        <MediaIcon icon={faLinkedin} iconSize="2x" link="https://www.linkedin.com/in/keithcurbelo"/>
        <MediaIcon icon={faFacebookF} iconSize="2x" link="https://www.facebook.com/keith.curbelo"/>
        <MediaIcon icon={faFileAlt} iconSize="2x" link="https://drive.google.com/file/d/1jgcC__spBqBppKc6cX3PDpK8fS2CN7ud/view?usp=sharing"/>
    </Col>
)

export const ContactField =({value,icon,iconSize,...props})=>(
    <Col xs={12} md={6} className="mb-3 header-info">
        <FontAwesomeIcon icon={icon} size={iconSize} className="text-dark-blue mr-3"/>
        <span className="font-weight-light">{value}</span>
    </Col>  
)

export const ContactInfo = ()=>(
    <Row id="header-box" className="border-top text-center pt-3 text-muted">
        <ContactField value="Miami, FL" icon={faMapMarkerAlt} iconSize="1x" />
        <ContactField value="contact@keithcurbelo.com" icon={faEnvelope} iconSize="1x" />
  </Row>
)