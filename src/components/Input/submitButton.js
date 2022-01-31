import React from 'react';
import './index.css';

export const SubmitButton = (props) => {
    return (
        <button {...props}>{props.name}</button>
    )
}