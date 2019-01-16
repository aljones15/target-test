import React from 'react'
import { Button, Icon } from '@blueprintjs/core'
import { Price, Text, Promotions } from './styled/order'

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
                <Price style={{display: 'inline'}}>{price.formattedPriceValue}</Price> <Text color="grey">{price.priceQualifier}</Text>
              </div>
              <Promotions>
                  {promos.map(({Description: [{shortDescription}]}) => (<p key={shortDescription}><Icon icon="tag" />{' '}{shortDescription}</p>))}
              </Promotions>
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