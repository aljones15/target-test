import { graphql } from "gatsby"

export const ItemTitle = graphql`
  fragment ResourceImages on ResourcesJson {
    id
    CatalogEntryView {
      title
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