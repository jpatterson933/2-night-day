import React from 'react';

export const ButtonLink = (props) => {
    return (
        <a href={props.buttonLink} className={props.buttonClass}>{props.buttonName} </a>
    )
}