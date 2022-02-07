import React from 'react';

// components
import { Image } from '../Image';
import { Details } from './projectDetails';

// media
import belles from "../../media/belles.jpg";

// stylesheet
import './index.css';

export const SecondProject = (props) => {

    const detailsList = Details.map((project) => {

        return (
            project.details.map((deets) => {
                return (
                    <div key={deets}>{deets}</div>
                )
            })
        )
    })

    return (
        <div id="project-one">
            <div id="project-grid-main">
                <h1 id="project-two-title">{Details[0].restaurant}</h1>
                <div id="project-details-two"> {detailsList[0]}
                </div>
                <Image
                    imageSrc={belles}
                    imageAlt="Belles Vibes"
                    imageClass="project-two-picture"
                />
            </div>
        </div>
    )
}