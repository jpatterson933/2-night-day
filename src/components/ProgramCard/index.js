import React from 'react';

// components

//details
import { Details } from './programDetails';

// stylesheet
import './index.css';

export const ProgramCard = () => {

    const programCard = Details.map((program) => {
        return (
            <div className="card" key={program.key}>
                <h1>{program.restaurant}</h1>
                {program.details.map((deets) => {
                    return (
                        <p key={deets}>{deets}</p>
                    )
                })}
            </div>
        )
    })

    return (
            <div className="project-card">
                {programCard}
            </div>
    )
}