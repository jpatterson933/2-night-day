export const Details = ({ program, programs, showDetails, setShowDetails }) => {

    return (
        <>
            {
                showDetails ? <div>
                    {program.details.map((deets) => {
                        return (
                            <p key={deets}>{deets}</p>
                        )
                    })}
                </div> : null
            }
            <button id="details-button" onClick={() => setShowDetails(!showDetails)}>Show/Hide Details</button>
        </>
    )
}