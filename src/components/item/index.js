import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Box from '../styled/box'
import Row from '../styled/row'

export default ({children, skip, take}) => {
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
          return (
          <React.Fragment>
          <Row>
            <Box><div>{title}</div></Box><Box>Two</Box>
          </Row>
          <Row>
            <Box>Three</Box><Box>Four</Box>
          </Row>   
          </React.Fragment>)
      }}
      />)
}