import React from 'react';

// components
import { ConsultBox } from '../components/ConsultBox';

// Stylesheet
import './index.css';

export const Landing = () => {
    return (
        <div id="main-grid">
            <div class="test" id="company">Night and Day Profile</div>
            <div id="owner">About Julien Calella</div>
            <div id="project-one">Project 1</div>
            <div id="main-packages"><ConsultBox /> <ConsultBox /> <ConsultBox /></div>
            <div id="project-two">Project 2</div>
            <div id="secondary-packages">Secondary Consulting Packages</div>
            <div id="other-projects">Other Projects</div>
            <div id="contact">Contact</div>
        </div>
    )
}