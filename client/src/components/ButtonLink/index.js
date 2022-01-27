import React from 'react';

// stylesheet
import './index.css';

export const ButtonLink = (props) => {
    return (
        <a href="/" className="button-link">{props.buttonName} </a>
    )
}