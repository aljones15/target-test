import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({children}) => {
    return(<StaticQuery
      query={graphql`
      query {
        allResourcesJson(skip: 0, limit: 1) {
          edges {
            node {
                ...ResourceImages
            }
          }
        }
      }`}
      render={({allResourcesJson: {edges: [{node}]}}) => {
          console.log('data', node);
          return(<div>Data Recieved</div>);
      }}
      />)
}
