import React from 'react';

// components
import { Box } from '../components/Box';
import { ButtonLink } from '../components/ButtonLink';
import { MainProject } from '../components/MainProject';

// Stylesheet
import './index.css';
import './button.css';

export const Landing = () => {
    return (
        <div id="main-grid">
            <div id="company">
                <Box
                    consultTitle="Night and Day Consulting"
                    detailsOne="Night and Day is a bar program consulting group based in Los Angeles. Specializations include decreasing 
                    beverage program costs by minimizing waste, inventory management, staff training, space organization and daily management.
                    Night and Day Bar consulting group will minimize your costs below 20% while improving you entire program."
                />
            </div>
                <ButtonLink buttonLink="/" buttonClass="button-one" buttonName="Brunch Vibes" />
            <div id="owner">
                <Box
                    className="package-one"
                    consultTitle="Julien Calella"
                    detailsOne="Corporate Beverage Director for Wish You Were Here Group"
                    detailsTwo="Consultant to various bar program across the United States"
                    detailsThree="Designer and developer of Elephante in Santa Monica, Kassi in Vegas, Belles Beach House in Venice."
                />
                <ButtonLink buttonLink="/" buttonClass="button-two" buttonName="Contact" />
            </div>
            <MainProject />
                <ButtonLink buttonLink="/" buttonClass="button-three" buttonName="More Projects" />

            {/* <div id="project-one">
                <h1>Elephante</h1>
                <ul>
                    <li>Bar Design</li>
                    <li>Menu Design</li>
                    <li>Drink Design</li>
                    <li>Inventory and Variance Tracking</li>
                    <li>Program Manuals for Entire Program</li>
                    <li>Staff Training</li>
                    <li>Menu Placements</li>
                    <li>Day to Day Program Oversight</li>
                </ul>
                <img className="ele-image" alt="elephante" src="https://images.squarespace-cdn.com/content/v1/5d2790419dc52c0001cecb1a/1606963189611-X1PM40LFLZRWOH6KYMN7/pxap3FYQ.jpg?format=2500w"></img>
            </div> */}
            <div id="main-packages">
                <Box className="package-one" consultTitle="Entire Bar Program" detailsOne="Bar Design and Layout" detailsTwo="Menu and Drink Design" detailsThree="Training Manual Design" />
                <Box className="package-two" consultTitle="Bar Space Design" detailsOne="Maximize Space" detailsTwo="Increase Volume" detailsThree="Professional Layout" />
                <Box className="package-three" consultTitle="Drink Design" detailsOne="Increased Sales" detailsTwo="Inventory Turnover" detailsThree="Great Taste" />
                <ButtonLink buttonLink="/" buttonClass="button-four" buttonName="More Consulting" />
            
            </div>
            <div id="project-two">
                <h1>Belle's Beach House</h1>
                <ul>
                    <li>Bar Design</li>
                    <li>Menu Design</li>
                    <li>Drink Design</li>
                    <li>Inventory and Variance Tracking</li>
                    <li>Program Manuals for Entire Program</li>
                    <li>Staff Training</li>
                    <li>Menu Placements</li>
                    <li>Day to Day Program Oversight</li>
                </ul>
                <ButtonLink buttonLink="/" buttonClass="button-five" buttonName="More Projects" />

            </div>
            <div id="secondary-packages">
                <Box className="package-one" consultTitle="Menu Design" detailsOne="Improved Sales" detailsTwo="Streamline Orders" detailsThree="Easier Sales for Staff" />
                <Box className="package-two" consultTitle="Program Costing" detailsOne="Lower Costs through" detailsTwo="Inventory Tracking" detailsThree="Staff Training" />
                <Box className="package-three" consultTitle="Prep Program" detailsOne="Prep Manuals that" detailsTwo="Streamline the process" detailsThree="Minimize wast and maximize output" />
                <ButtonLink buttonLink="/" buttonClass="button-six" buttonName="Main Consulting Packages" />

            </div>
            <div id="other-projects">
                <Box className="package-one" consultTitle="The Eveleigh" detailsOne="Los Angeles" detailsTwo="Lowered Costs" detailsThree="Helped with Inventory Turnover" />
                <Box className="package-two" consultTitle="Fia" detailsOne="Drink design" detailsTwo="Menu Design" detailsThree="Staff Training and Increase in Inventory Turnover" />
                <Box className="package-three" consultTitle="Dudleys & Little Rubys New York" detailsOne="testOne" detailsTwo="testTwo" detailsThree="testThree" />
                <ButtonLink buttonLink="/" buttonClass="button-seven" buttonName="Back to Top" />

            </div>
            <div id="contact">
                <Box className="package-three" consultTitle="Want a quick consultation?" detailsOne="Submit your email below" detailsTwo="Email here" detailsThree="testThree" />
                <ButtonLink buttonLink="/" buttonClass="button-eighta" buttonName="Submit" />
            </div>
        </div>
    )
}