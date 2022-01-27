import React from 'react';

// components
import { ButtonLink } from '../ButtonLink';

// stylesheet
import './index.css';

export const Nav = () => {
    return (
        <nav id="navigation-menu">
                <ButtonLink buttonName="N&D" />
                <ButtonLink buttonName="Bars" />
                <ButtonLink buttonName="Consult" />
                <ButtonLink buttonName="Contact" />
        </nav>
    )
}