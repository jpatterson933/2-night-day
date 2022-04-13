import React from 'react';

// components
import { Box } from '../components/Box';
import { ButtonLink } from '../components/ButtonLink';

// Stylesheet
import './index.css';
import './button.css';

export const Landing = () => {
    return (
            <div id="main-grid">
                <div id="company">
                    <Box
                        consultTitle="Night and Day Consulting"
                        detailsOne="Night and Day is a bar program consulting group based in Los Angeles. 
                        Night and Day Bar consulting group will minimize your costs below 20% while improving you entire program.
                        Specializations include decreasing beverage program costs by minimizing waste, inventory management, 
                        staff training, space organization and daily management."
                    />
                    <ButtonLink buttonLink="#elephante-link" buttonClass="button-one" buttonName="Bar Programs" />
                </div>
                <div id="owner">
                    <Box
                        className="package-one"
                        consultTitle="Julien Calella"
                        detailsOne="Corporate Beverage Director for Wish You Were Here Group"
                        detailsThree="Designer and developer of various bar programs across the United States."
                    />
                    <ButtonLink buttonLink="#contact" buttonClass="button-two" buttonName="Contact" />
                </div>
            </div>
    )
}