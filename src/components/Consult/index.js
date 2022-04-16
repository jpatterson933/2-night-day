import React from "react";
// componenets
import { Fade } from 'react-awesome-reveal';
// style
import './index.css';
// components
import { Consult } from "./consultingDetails";

export const ConsultingCard = () => {
    const consultCards = Consult.map((consult) => {
        return (
            <Fade className="consult-card" key={consult.reference}>
                <div>
                    <h1>{consult.reference}</h1>
                    <h4 className='deets'>{consult.description}</h4>
                    <div>
                        {consult.details.map((deets) => {
                            return (
                                <p key={deets}>{deets}</p>
                            )
                        })}
                    </div>
                </div>
            </Fade>
        )
    });
    return (
        <>
            <h1 id="page-title">Night & Day Consulting Packages for any Bar Program</h1>
            <div className="consult-package-grid">
                {consultCards}
            </div>
        </>
    )
};