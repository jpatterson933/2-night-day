import React from 'react';

// components
import { ButtonLink } from '../ButtonLink';

// stylesheet
import './index.css';

export const Nav = () => {
    return (
        <nav id="navigation-menu">
                <ButtonLink buttonLink="#company" buttonClass="nav-button" buttonName="N&D" />
                <ButtonLink buttonLink="#project-one" buttonClass="nav-button" buttonName="Bars" />
                <ButtonLink buttonLink="#main-packages" buttonClass="nav-button" buttonName="Consult" />
                <ButtonLink buttonLink="#contact" buttonClass="nav-button" buttonName="Contact" />
        </nav>
    )
}