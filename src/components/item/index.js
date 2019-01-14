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
          const { CatalogEntryView: [entry] } = node
          console.log('entry', entry)
          const { title, Images } = entry
          console.log('Images', Images)
          return(<div>{title}</div>)
      }}
      />)
}