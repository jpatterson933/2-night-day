import React from 'react';

export const SubmitButton = (props) => {
    return (
        <button {...props}>{props.name}</button>
    )
}