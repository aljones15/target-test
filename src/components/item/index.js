import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Box from '../styled/box'
import Row from '../styled/row'
import Carousel from './carousel'
import Order from './order'
import Highlights from './highlights'
import Reviews from './reviews'

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
          const { 
            title, Images, 
            CustomerReview, ItemDescription, 
            Offers, Promotions, 
            ReturnPolicy } = entry
          return (
          <React.Fragment>
          <Row data-test="item-page">
            <Box data-test="carousel-box">
              <Carousel title={title} images={Images} />
            </Box>
            <Box data-test="order-box">
              <Order
                promos={Promotions}
                offers={Offers}
                returns={ReturnPolicy}
              />
            </Box>
          </Row>
          <Row>
            <Box data-test="reviews-box">
              <Reviews reviews={CustomerReview} />
            </Box>
            <Box data-test="highlights-box">
              <Highlights description={ItemDescription} />
            </Box>
          </Row>   
          </React.Fragment>)
      }}
      />)
}
