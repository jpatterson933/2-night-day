import React from 'react';

// Stylesheet
import './index.css';
export const Landing = () => {
    return (
        <div id="main-grid">
            <div id="company">
                <h1 className="title">Night and Day Consulting</h1>
                <p id="company-description">"Night and Day is a bar program consulting group based in Los Angeles.
                    Night and Day Bar consulting group will minimize your costs below 20% while improving you entire program.
                    <br></br>
                    <br></br>
                    Specializations include decreasing beverage program costs by minimizing waste, inventory management,
                    staff training, space organization and daily management."</p>
                <h1 className="julien">-Julien Calella</h1>
                <div id="owner-details">
                    <p>*Owner of Night & Day Consulting*</p>
                    <p>*Corporate Beverage Director for Wish You Were Here Group*</p>
                    <p>*Designer and developer of various bar programs across the United States*</p>
                </div>
            </div>
        </div>
    )
}