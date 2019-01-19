import React from 'react'

function Highlights({description}) {
    const [{features}] = description
    return(
        <div>
            <h1>product highlights</h1>
            <ul>
              {features.map(f => <li key={f} dangerouslySetInnerHTML={{__html: f}} />)}
            </ul>
        </div>
    )
}

export default Highlights
