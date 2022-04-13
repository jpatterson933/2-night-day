import React from 'react';

// components
import { Image } from '../Image';
import { Details } from './projectDetails';

// stylesheet
import './index.css';

//media
import elephante from '../../media/elephante.jpg';

export const MainProject = (props) => {

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
                <h1 id="project-title">{Details[0].restaurant}</h1>
                <div id="project-details"> {detailsList[0]}
                </div>
                <Image
                    imageSrc={elephante}
                    imageAlt="Elephante Vibes"
                    imageClass="project-picture"
                />
            </div>
        </div>
    )
}