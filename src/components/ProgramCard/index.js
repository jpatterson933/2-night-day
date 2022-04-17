import React, { useState } from 'react';
// components
//details
// import { Details } from './programDetails';
import { ProgramList } from '../ProgramList';
// stylesheet
import './index.css';

export const ProgramCard = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [programs, setPrograms] = useState([
        {
            restaurant: "Elephante",
            key: "elephante",
            details: ["Menu Design", "Drink Design", "Point of Sale", "Program Manuals", "Staff Training", "Inventory Tracking", "< 20% Costs", "Bar Program Oversight"],
            site: "",
            id: 1
        },
        {
            restaurant: "Belles Beach House",
            key: "belles",
            details: ["Bar Design", "Menu Design", "Drink Design", "Point of Sale", "Program Manuals", "Staff Training", "Prep Program", "Minimizing Costs", "Brand Placement", "Day to Day Program Oversight"],
            site: "",
            id: 2
        },
        {
            restaurant: "Dudleys",
            key: "dudleys",
            details: ["Inventory Management", "Data Gathering"],
            site: "",
            id: 3
        },
        {
            restaurant: "Fia",
            key: "fia",
            details: ["Menu Design", "Inventory Management", "Cocktail Creation"],
            site: "",
            id: 4
        },
        {
            restaurant: "Kassi Beach House",
            key: "kassi beach",
            details: ["Program Creation", "Staffing", "Inventory Management"],
            site: "",
            id: 5
        }
    ])

    return (
        <>
            <h1 id="program-title">Night & Day Bar Programs</h1>
            <ProgramList 
            programs={programs} 
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            />
            <ProgramList 
            programs={programs.filter((programs) => programs.id === 1 )} 
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            />


        </>
    )



    // const programCards = Details.map((program) => {
    //     return (
    //         <Fade className="program-card" key={program.restaurant}>
    //             <div>
    //                 <h1>{program.restaurant}</h1>
    //                 <h4 className='deets'>{program.description}</h4>
    //                 { 
    //                 showDetails?<div>
    //                     {program.details.map((deets) => {
    //                         return (
    //                             <p key={deets}>{deets}</p>
    //                         )
    //                     })}
    //                 </div>:null
    //                 }
    //                     <button onClick={()=>setShowDetails(!showDetails)}>Show/Hide Details</button>
    //             </div>
    //         </Fade>
    //     )
    // });
    // return (
    //     <>
    //         <h1 id="program-title">Night & Day Bar Programs</h1>
    //         <div className="program-package-grid">
    //             {programCards}
    //         </div>
    //     </>
    // )
};