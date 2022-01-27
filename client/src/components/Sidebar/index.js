import React from 'react';

// components
import { ButtonLink } from '../ButtonLink';

// stylesheet
import './index.css';

export const Nav = () => {
    return (
        <nav id="navigation-menu">
                <ButtonLink buttonClass="nav-button" buttonName="N&D" />
                <ButtonLink buttonClass="nav-button" buttonName="Bars" />
                <ButtonLink buttonClass="nav-button" buttonName="Consult" />
                <ButtonLink buttonClass="nav-button" buttonName="Contact" />
        </nav>
    )
}