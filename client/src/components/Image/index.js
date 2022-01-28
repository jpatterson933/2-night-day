import React from 'react';

// stylesheet
import './index.css';

export const Image = (props) => {
    return (
        <img className={props.imageClass} src={props.imageSrc} alt={props.imageAlt} />
    )
}