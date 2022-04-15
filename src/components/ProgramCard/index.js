import React from 'react';

// components
import { Fade } from 'react-awesome-reveal';

//details
import { Details } from './programDetails';

// stylesheet
import './index.css';

// export const ProgramCard = () => {

//     const programCard = Details.map((program) => {
//         return (
//             <div key={program.key}>
//                 <h1>{program.restaurant}</h1>
//                 {program.details.map((deets) => {
//                     return (
//                         <p key={deets}>{deets}</p>
//                     )
//                 })}
//             </div>
//         )
//     })

//     return (
//         <div id="card-holder">
//             <div className="project-card">
//                 {programCard}
//             </div>
//         </div>
//     )
// }

export const ProgramCard = () => {

    const programCards = Details.map((program) => {
        return (
            <Fade className="program-card" key={program.restaurant}>
                <div>
                    <h1>{program.restaurant}</h1>
                    <h4 className='deets'>{program.description}</h4>
                    <div>
                        {program.details.map((deets) => {
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
            <h1 id="program-title">Night & Day Bar Programs</h1>
            <div className="program-package-grid">
                {programCards}
            </div>
        </>
    )
};