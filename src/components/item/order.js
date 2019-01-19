import React from 'react'
import { Icon } from '@blueprintjs/core'
import { Price, Text, 
    Promotions, PromoItem, Padded, 
    Returns, ReturnDetails, ReturnTitle,
    Counter, CounterContainer  } from './styled/order'
import { BoxButton, RoundButton } from './styled/buttons'

class Order extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            quantity: 0,
        }
    }
    handleDecrement = () => {
        let { quantity } = this.state
        if (quantity > 0) {
            const next = --quantity
            this.setState({quantity: next})
        }
        return null
    }
    handleIncrement = () => this.setState(({quantity}) => ({quantity: ++quantity}))
    render() {
        const {
            offers,
            promos,
            returns
        } = this.props
        const [{OfferPrice: [price]}] = offers
        const [{ReturnPolicyDetails: [{policyDays}]}] = returns
        const btnGrey = '#AAAAAA'
        return(
            <div id="offers" data-test="offers-page">
              <Padded id="price">
                <Price data-test="offer-price">
                  {price.formattedPriceValue}
                </Price>
                <Text color="grey">
                  {price.priceQualifier}
                </Text>
              </Padded>
              <Padded>
                <Promotions data-test="offers-promotions">
                  {promos.map(({Description: [{shortDescription}]}) =>
                    (<PromoItem key={shortDescription}>
                      <Icon icon="tag" />{'   '}{shortDescription}
                    </PromoItem>))}
                </Promotions>
              </Padded>
              <Padded>
                  <CounterContainer>
                    <span style={{float: 'left'}}>quantity:</span>
                    <Counter data-test="offers-counter">
                      <Icon
                        icon="remove"
                        onClick={this.handleDecrement}
                        style={{color: btnGrey, marginRight: '0.4rem'}}
                        data-test="offers-counter-minus"
                      />
                        {this.state.quantity}
                      <Icon
                        icon="add"
                        onClick={this.handleIncrement } 
                        style={{color: btnGrey, marginLeft: '0.4rem'}}
                        data-test="offers-counter-plus"
                      />
                    </Counter>
                  </CounterContainer>
              </Padded>
              <Padded>
                  <BoxButton color="red">PICK UP IN STORE</BoxButton>
                  <BoxButton color="red">ADD TO CART</BoxButton>
              </Padded>
              <Returns>
                  <ReturnTitle>returns</ReturnTitle>
                  <ReturnDetails>
                    {`This item must be returned within ${policyDays} days of the ship date. 
                    See return policy for details.
                    Prices, promotions, styles and availability may very by store and online`}
                  </ReturnDetails>
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
