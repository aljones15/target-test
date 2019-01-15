import React from 'react'
import { Button } from '@blueprintjs/core'

class Order extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            quantity: 0,
        }
    }
    render() {
        const {
            offers,
            promos,
            returns
        } = this.props
        const [{OfferPrice: [price]}] = offers
        return(
            <div id="offers">
              <div id="price">
                {price.formattedPriceValue} {price.priceQualifier}
              </div>
              <div>
                  {promos.map(({Description: [{shortDescription}]}) => (<p>{shortDescription}</p>))}
              </div>
              <div>
                  <input type="number" min={0} />
              </div>
              <div>
                  <Button>PICK UP IN STORE</Button>
                  <Button>ADD TO CART</Button>
              </div>
              <div>
                  returns
              </div>
              <div>
                  <Button>ADD TO REGISTRY</Button>
                  <Button>ADD TO LIST</Button>
                  <Button>SHARE</Button>
              </div>
            </div>
        )
    }
}

export default Order