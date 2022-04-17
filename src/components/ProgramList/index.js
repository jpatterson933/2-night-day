import { Fade } from 'react-awesome-reveal';
import { Details } from './programDetails';


export const ProgramList = ({ program, programs, showDetails, setShowDetails }) => {

    return (
        <div className="program-package-grid">
        {programs.map((program) =>
            <Fade className="program-card" key={program.restaurant}>
                <div>
                    <h1>{program.restaurant}</h1>
                    <h4 className='deets'>{program.description}</h4>
                    <Details 
                    program={program}
                    showDetails={showDetails}
                    setShowDetails={setShowDetails}
                    />
                </div>
            </Fade>

        )}
    </div>
    )
    
}