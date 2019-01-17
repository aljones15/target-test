import React from 'react'
import { Icon } from '@blueprintjs/core'
import { Price, Text, 
    Promotions, PromoItem, 
    Padded, 
    Returns, ReturnDetails, ReturnTitle } from './styled/order'
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
        const [{ReturnPolicyDetails: [{policyDays}]}] = returns
        console.log('returns', returns)
        return(
            <div id="offers">
              <Padded id="price">
                <Price>{price.formattedPriceValue}</Price> <Text color="grey">{price.priceQualifier}</Text>
              </Padded>
              <Padded>
                <Promotions>
                  {promos.map(({Description: [{shortDescription}]}) => (<PromoItem key={shortDescription}><Icon icon="tag" />{'   '}{shortDescription}</PromoItem>))}
                </Promotions>
              </Padded>
              <Padded>
                  <input type="number" min={0} />
              </Padded>
              <Padded>
                  <BoxButton color="red">PICK UP IN STORE</BoxButton>
                  <BoxButton color="red">ADD TO CART</BoxButton>
              </Padded>
              <Returns>
                  <ReturnTitle>returns</ReturnTitle><ReturnDetails>{`This item must be returned within ${policyDays} days of the ship date. See return policy for details. Prices, promotions, styles and availability may very by store and online`}</ReturnDetails>
              </Returns>
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