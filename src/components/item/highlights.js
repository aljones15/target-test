import React from 'react'

function Highlights({description}) {
    console.log('Highlights', description)
    const [{features}] = description
    return(
        <div>
            <h1>Highlights</h1>
            <ul>
              {features.map(f => <li key={f} dangerouslySetInnerHTML={{__html: f}} />)}
            </ul>
        </div>
    )
}

export default Highlights