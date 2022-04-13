import React from 'react';

// components
import { Box } from '../components/Box';
import { ButtonLink } from '../components/ButtonLink';
import { MainProject } from '../components/MainProject';

// Stylesheet
import './index.css';
import './button.css';
import { SecondProject } from '../components/ProjectTwo';

export const Projects = () => {
    return (
        <>
            <div id="main-grid">
                <div id="elephante-link" className="project-row-one">
                    <MainProject />
                    <ButtonLink buttonLink="#project-two" buttonClass="button-three" buttonName="More Bar Programs" />
                </div>
                <div id="project-two">
                    <SecondProject />
                    <ButtonLink buttonLink="#other-projects" buttonClass="button-five" buttonName="Other Bar Programs" />
                </div>
                <div id="other-projects">
                    <Box className="package-one" consultTitle="Dudleys" detailsOne="New York" detailsTwo="Bar Data Gathering" detailsThree="Inventory Management" />
                    <Box className="package-two" consultTitle="Fia" detailsOne="Los Angeles" detailsTwo="Menu Design" detailsThree="Inventory Turnover" />
                    <Box className="package-three" consultTitle="Kassi Club" detailsOne="Las Vegas" detailsTwo="Cocktail Creation" detailsThree="Inventory Management" />
                </div>
                    <ButtonLink buttonLink="#company" buttonClass="button-seven" buttonName="Back to Top" />
            </div>
        </>
    )
}