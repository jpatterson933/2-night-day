import React from 'react';
// components
import { ButtonLink } from '../ButtonLink';
import { Day } from '../Day';
import { Night } from '../Night';
// stylesheet
import './index.css';
export const Nav = () => {
    return (
        <>
            <nav id="navigation-menu">
                <Night />
                <ButtonLink buttonLink="https://night-and-day-consulting.herokuapp.com/" buttonClass="nav-button" buttonName="N&D" />
                <ButtonLink buttonLink="https://night-and-day-consulting.herokuapp.com/projects" buttonClass="nav-button" buttonName="Bars" />
                <ButtonLink buttonLink="https://night-and-day-consulting.herokuapp.com/consult" buttonClass="nav-button" buttonName="Consult" />
                <ButtonLink buttonLink="https://night-and-day-consulting.herokuapp.com/contact" buttonClass="nav-button" buttonName="Contact" />
                <Day />
                <div id="llc">Night & Day Consulting LLC</div>
            </nav>
        </>
    )
}