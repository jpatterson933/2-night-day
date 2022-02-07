import React from 'react';

export const Image = (props) => {
    return (
        <img className={props.imageClass} src={props.imageSrc} alt={props.imageAlt} />
    )
}