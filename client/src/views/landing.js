import React from 'react';

// components
import { Box } from '../components/Box';

// Stylesheet
import './index.css';

export const Landing = () => {
    return (
        <div id="main-grid">
            <div className="test" id="company">
                <Box
                    consultTitle="Night and Day Consulting"
                    detailsOne="Night and Day is a bar program consulting group based in Los Angeles. Specializations include 
                    maximizing bar space and beverage ouptput while minimizing bar program costs. This is accomplished through 
                    the training of staff and implementation of daily, weekly, and monthly procedures designed to lower costs
                    at each step of the beverage program."
                />
            </div>
            <div id="owner">
                <Box
                    className="package-one"
                    consultTitle="Julien Calella"
                    detailsOne="Corporate Beverage Director for Wish You Were Here Group"
                    detailsTwo="Consultant to various bar program across the United States"
                    detailsThree="Designer and developer of Elephante in Santa Monica, Kassi in Vegas, Belles Beach House in Venice."
                />
            </div>
            <div id="project-one">
                <h1>elephante</h1>
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
            </div>
            <div id="main-packages">
                <Box className="package-one" consultTitle="Entire Bar Program" detailsOne="Bar Design and Layout" detailsTwo="Menu and Drink Design" detailsThree="Training Manual Design" />
                <Box className="package-two" consultTitle="Bar Space Design" detailsOne="Maximize Space" detailsTwo="Increase Volume" detailsThree="Professional Layout" />
                <Box className="package-three" consultTitle="Drink Design" detailsOne="Increased Sales" detailsTwo="Inventory Turnover" detailsThree="Great Taste" />
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


            </div>
            <div id="secondary-packages">
                <Box className="package-one" consultTitle="Menu Design" detailsOne="Improved Sales" detailsTwo="Streamline Orders" detailsThree="Easier Sales for Staff" />
                <Box className="package-two" consultTitle="Program Costing" detailsOne="Lower Costs through" detailsTwo="Inventory Tracking" detailsThree="Staff Training" />
                <Box className="package-three" consultTitle="Prep Program" detailsOne="Prep Manuals that" detailsTwo="Streamline the process" detailsThree="Minimize wast and maximize output" />
            </div>
            <div id="other-projects">
                <Box className="package-one" consultTitle="The Eveleigh" detailsOne="Los Angeles" detailsTwo="Lowered Costs" detailsThree="Helped with Inventory Turnover" />
                <Box className="package-two" consultTitle="Fia" detailsOne="Drink design" detailsTwo="Menu Design" detailsThree="Staff Training and Increase in Inventory Turnover" />
                <Box className="package-three" consultTitle="Dudleys & Little Rubys New York" detailsOne="testOne" detailsTwo="testTwo" detailsThree="testThree" />
            </div>
            <div id="contact">
                <Box className="package-three" consultTitle="Want a quick consultation?" detailsOne="Submit your email below" detailsTwo="Email here" detailsThree="testThree" />
            </div>
        </div>
    )
}