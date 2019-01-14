import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Box from '../styled/box'
import Row from '../styled/row'
import Carousel from './carousel'

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
          const { title, Images, CustomerReview, ItemDescription, Offers, Promotions, ReturnPolicy } = entry
          return (
          <React.Fragment>
          <Row>
            <Box>
              <Carousel title={title} images={Images} />
            </Box>
            <Box>Two</Box>
          </Row>
          <Row>
            <Box>Three</Box><Box>Four</Box>
          </Row>   
          </React.Fragment>)
      }}
      />)
}