import React from 'react';

// components
import { Image } from '../Image';
import { Details } from './projectDetails';

// stylesheet
import './index.css';



export const MainProject = (props) => {

    const detailsList = Details.map((project) => {

        return (
            project.details.map((deets) => {
                return (
                    <li key={deets}>{deets}</li>
                )
            })

        )
    })

    console.log(detailsList[0])

    return (
        <div id="project-one">
            <div id="project-grid-main">
                <h1>{Details[0].restaurant}</h1>
                <ul> {detailsList[0]}
                    {/*  What is inventory management? Tracking Inventtory variance of what should be there and what shouldnt. 
                    Inventory turnover where you make sure you are not wasting space and money on inventory that does not move. 
                    Carrying high selling inventory items. */}
                </ul>
                <Image
                    imageSrc="https://images.squarespace-cdn.com/content/v1/5d2790419dc52c0001cecb1a/1606963189611-X1PM40LFLZRWOH6KYMN7/pxap3FYQ.jpg?format=2500w"
                    imageAlt="Elephante Vibes"
                    imageClass="project-picture"
                />
            </div>
        </div>
    )
}