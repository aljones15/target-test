import React from 'react'

function Highlights({description}) {
    const [{features}] = description
    return(
        <div data-test="highlights">
            <h1>product highlights</h1>
            <ul data-test="highlights-list">
              {features.map(f => <li
                                     key={f}
                                     data-test="highlights-list-item"
                                     dangerouslySetInnerHTML={{__html: f}} 
                                 />)}
            </ul>
        </div>
    )
}

export default Highlights
