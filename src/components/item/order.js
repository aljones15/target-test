import React from 'react'
import { Button, Icon, ButtonGroup } from '@blueprintjs/core'
import { Price, Text, Promotions, PromoItem, Padded } from './styled/order'
import { BoxButton, RoundButton } from './styled/buttons'

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
                <Price>{price.formattedPriceValue}</Price> <Text color="grey">{price.priceQualifier}</Text>
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
                  <BoxButton color="red">PICK UP IN STORE</BoxButton>
                  {'    '}
                  <BoxButton color="red">ADD TO CART</BoxButton>
              </Padded>
              <div>
                  returns
              </div>
              <Padded>
                  <RoundButton>ADD TO REGISTRY</RoundButton>
                  <RoundButton>ADD TO LIST</RoundButton>
                  <RoundButton>SHARE</RoundButton>
              </Padded>
            </div>
        )
    }
}

export default Order