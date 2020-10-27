import React from "react";
import {Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Name = ()=>(
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