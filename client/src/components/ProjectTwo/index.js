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

    console.log(detailsList[0])

    return (
        <div id="project-one">
            <div id="project-grid-main">
                <h1 id="project-two-title">{Details[0].restaurant}</h1>
                <div id="project-details"> {detailsList[0]}
                    {/*  What is inventory management? Tracking Inventtory variance of what should be there and what shouldnt. 
                    Inventory turnover where you make sure you are not wasting space and money on inventory that does not move. 
                    Carrying high selling inventory items. */}
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