import React from 'react';

// stylesheet
import './index.css';

export const ButtonLink = (props) => {
    return (
        <a href={props.buttonLink} className={props.buttonClass}>{props.buttonName} </a>
    )
}