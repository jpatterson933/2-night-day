import React from 'react';

// components
import { Image } from '../Image';

// stylesheet
import './index.css';

export const MainProject = (props) => {
    return (
        <div id="project-one">
            <div id="project-grid-main">
                <h1>Elephante</h1>
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
                <Image
                    imageSrc="https://images.squarespace-cdn.com/content/v1/5d2790419dc52c0001cecb1a/1606963189611-X1PM40LFLZRWOH6KYMN7/pxap3FYQ.jpg?format=2500w"
                    imageAlt="Elephante Vibes"
                    className="project-picture"
                />

            </div>
        </div>
    )
}