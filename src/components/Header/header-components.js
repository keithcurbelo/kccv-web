import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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