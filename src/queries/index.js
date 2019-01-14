import { graphql } from "gatsby"

export const ItemTitle = graphql`
  fragment ResourceImages on ResourcesJson {
    CatalogEntryView {
        ItemDescription {
          features
        }
        Offers {
          OfferPrice {
            currencyCode
            formattedPriceValue
            priceQualifier
            priceValue
          }
        }
        ReturnPolicy {
          ReturnPolicyDetails {
            guestMessage
            policyDays
            user
          }
        }
        Promotions {
          Description {
            shortDescription
          }
        }
        applyCouponLink
        buyable
        callOutMsg
        catEntryId
        classId
        department
        eligibleFor
        inventoryCode
        inventoryStatus
        itemId
        itemType
        manufacturer
        manufacturerPartNumber
        shortDescription
        title
        CustomerReview {
          Con {
            datePosted
            overallRating
            review
            reviewKey
            screenName
            title
          }
          Pro {
            datePosted
            overallRating
            review
            reviewKey
            screenName
            title
          }
          consolidatedOverallRating
          totalPages
          totalReviews
          Reviews {
            title
            city
            review
            totalVotes
            totalComments
            datePosted
            overallRating
            Comments {
              city
              postedDate
              commentKey
              commentText
            }
          }
        }
        Images{
          AlternateImages {
            image
          }
          PrimaryImage {
            image
          }
          source
        }
      }
  }
`;  