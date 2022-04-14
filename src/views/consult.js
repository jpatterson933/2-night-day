import React from 'react';

// components
import { Box } from '../components/Box';

// Stylesheet
import './index.css';
import './button.css';

export const Consult = () => {
    return (
            <div id="main-grid">
                <h1>Consulting</h1>
                <div id="main-packages">
                    <Box className="package-one" consultTitle="Bar Program" detailsOne="Bar Layout" detailsTwo="Cocktail Creation" detailsThree="Staff Training" />
                    <Box className="package-two" consultTitle="Bar Design" detailsOne="Maximize Space" detailsTwo="Increase Volume" detailsThree="Professional Layout" />
                    <Box className="package-three" consultTitle="Bar Sales" detailsOne="Increased Sales" detailsTwo="Inventory Turnover" detailsThree="Great Taste" />
                </div>
                <div id="secondary-packages">
                    <Box className="package-one" consultTitle="Menu Design" detailsOne="Improved Sales" detailsTwo="Streamline Orders" detailsThree="Easier Sales for Staff" />
                    <Box className="package-two" consultTitle="Lower Costs" detailsOne="Lower Costs through" detailsTwo="Inventory Tracking" detailsThree="Staff Training" />
                    <Box className="package-three" consultTitle="Prep Program" detailsOne="Prep Design" detailsTwo="Fresh Daily" detailsThree="Minimize Waste" />
                </div>
            </div>
    )
}