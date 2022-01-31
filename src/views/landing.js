import React from 'react';

// components
import { Box } from '../components/Box';
import { ButtonLink } from '../components/ButtonLink';
import { MainProject } from '../components/MainProject';
// import { Day } from '../components/Day';

// Stylesheet
import './index.css';
import './button.css';
import { SecondProject } from '../components/ProjectTwo';
import { Input } from '../components/Input';

export const Landing = () => {
    return (
        <>
            <div id="main-grid">
                <div id="company">
                    <Box
                        consultTitle="Night and Day Consulting"
                        detailsOne="Night and Day is a bar program consulting group based in Los Angeles. Specializations include decreasing 
                        beverage program costs by minimizing waste, inventory management, staff training, space organization and daily management.
                        Night and Day Bar consulting group will minimize your costs below 20% while improving you entire program."
                    />
                    <ButtonLink buttonLink="#elephante-link" buttonClass="button-one" buttonName="Projects" />
                </div>
                <div id="owner">
                    <Box
                        className="package-one"
                        consultTitle="Julien Calella"
                        detailsOne="Corporate Beverage Director for Wish You Were Here Group"
                        detailsTwo="Consultant to various bar program across the United States"
                        detailsThree="Designer and developer of Elephante in Santa Monica, Kassi in Vegas, Belles Beach House in Venice."
                    />
                    <ButtonLink buttonLink="#contact" buttonClass="button-two" buttonName="Contact" />
                </div>
                <div id="elephante-link" className="project-row-one">
                    <MainProject />
                    <ButtonLink buttonLink="#project-two" buttonClass="button-three" buttonName="Bar Programs" />
                </div>
                <div id="main-packages">
                    <Box className="package-one" consultTitle="Bar Program" detailsOne="Bar Layout" detailsTwo="Cocktail Creation" detailsThree="Staff Training" />
                    <Box className="package-two" consultTitle="Bar Design" detailsOne="Maximize Space" detailsTwo="Increase Volume" detailsThree="Professional Layout" />
                    <Box className="package-three" consultTitle="Bar Sales" detailsOne="Increased Sales" detailsTwo="Inventory Turnover" detailsThree="Great Taste" />
                </div>
                    <ButtonLink buttonLink="#secondary-packages" buttonClass="button-four" buttonName="Consulting" />

                <div id="project-two">
                    <SecondProject />
                    <ButtonLink buttonLink="#other-projects" buttonClass="button-five" buttonName="Bar Programs" />
                </div>
                <div id="secondary-packages">
                    <Box className="package-one" consultTitle="Menu Design" detailsOne="Improved Sales" detailsTwo="Streamline Orders" detailsThree="Easier Sales for Staff" />
                    <Box className="package-two" consultTitle="Program Costing" detailsOne="Lower Costs through" detailsTwo="Inventory Tracking" detailsThree="Staff Training" />
                    <Box className="package-three" consultTitle="Prep Program" detailsOne="Prep Design" detailsTwo="Fresh Daily" detailsThree="Minimize Waste" />
                </div>
                    <ButtonLink buttonLink="#contact" buttonClass="button-six" buttonName="Contact" />
                <div id="other-projects">
                    <Box className="package-one" consultTitle="Dudleys" detailsOne="New York" detailsTwo="Bar Data Gathering" detailsThree="Inventory Management" />
                    <Box className="package-two" consultTitle="Fia" detailsOne="Los Angeles" detailsTwo="Menu Design" detailsThree="Inventory Turnover" />
                    <Box className="package-three" consultTitle="Kassi Club" detailsOne="Las Vegas" detailsTwo="Cocktail Creation" detailsThree="Inventory Management" />
                </div>
                    <ButtonLink buttonLink="#company" buttonClass="button-seven" buttonName="Back to Top" />
                <div id="contact">
                    <Box className="package-three" consultTitle="Want a quick conversation?" detailsTwo="Email here"/>
                    <Input />
                </div>
            </div>
        </>
    )
}