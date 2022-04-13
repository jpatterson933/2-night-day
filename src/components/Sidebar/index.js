import React from 'react';

// components
import { ButtonLink } from '../ButtonLink';

// stylesheet
import './index.css';

export const Nav = () => {
    return (
        <nav id="navigation-menu">
                <ButtonLink buttonLink="/" buttonClass="nav-button shimmer" buttonName="N&D" />
                <ButtonLink buttonLink="/projects" buttonClass="nav-button shimmer" buttonName="Bars" />
                <ButtonLink buttonLink="/consult" buttonClass="nav-button shimmer" buttonName="Consult" />
                <ButtonLink buttonLink="/contact" buttonClass="nav-button shimmer" buttonName="Contact" />
        </nav>
    )
}