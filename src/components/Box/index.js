import React from 'react';

// stylesheet
import './index.css';

export const Box = (props) => {
    return (
        <div className="box">
            <h1>{props.consultTitle}</h1>
                <p>{props.detailsOne}</p>
                <p>{props.detailsTwo}</p>
                <p>{props.detailsThree}</p>
        </div>
    )
}