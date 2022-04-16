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
                <ButtonLink buttonLink="/" buttonClass="nav-button" buttonName="N&D" />
                <ButtonLink buttonLink="/projects" buttonClass="nav-button" buttonName="Bars" />
                <ButtonLink buttonLink="/consult" buttonClass="nav-button" buttonName="Consult" />
                <ButtonLink buttonLink="/contact" buttonClass="nav-button" buttonName="Contact" />
                <Day />
                <div id="llc">Night & Day Consulting LLC</div>
            </nav>
        </>
    )
}