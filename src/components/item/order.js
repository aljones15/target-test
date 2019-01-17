import React from 'react'
import { Button, Icon, ButtonGroup } from '@blueprintjs/core'
import { Price, Text, Promotions, PromoItem, Padded } from './styled/order'

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
              <Padded>
                <Promotions>
                  {promos.map(({Description: [{shortDescription}]}) => (<PromoItem key={shortDescription}><Icon icon="tag" />{' '}{shortDescription}</PromoItem>))}
                </Promotions>
              </Padded>
              <Padded>
                  <input type="number" min={0} />
              </Padded>
              <Padded>
                  <Button intent="danger" text="PICK UP IN STORE" />
                  {'    '}
                  <Button intent="danger" text="ADD TO CART" />
              </Padded>
              <div>
                  returns
              </div>
              <ButtonGroup>
                  <Button>ADD TO REGISTRY</Button>
                  <Button>ADD TO LIST</Button>
                  <Button>SHARE</Button>
              </ButtonGroup>
            </div>
        )
    }
}

export default Order