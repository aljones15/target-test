import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Order from '../../src/components/item/order'
import Data from '../../resources/items.json'

describe('<Order />', function() {
    function setup() {
        const {CatalogEntryView: [entry]} = Data
        const { Promotions, Offers, ReturnPolicy } = entry
        return shallow(<Order promos={Promotions} offers={Offers} returns={ReturnPolicy} />)
    }
    it('should render', function() {
        const order = setup()
        expect(order).not.to.be.null
        expect(order.exists()).to.be.true
    })
    it('should start never have a quantity less than 0', function() {
        const order = setup()
        expect(order).not.to.be.null
        expect(order.state('quantity')).to.equal(0) 
        const minus = order.find('[data-test="offers-counter-minus"]')
        expect(minus.length).to.equal(1)
        minus.simulate('click')
        expect(order.state('quantity')).to.equal(0) 
    })
    it('should always increment', function() {
        const order = setup()
        expect(order).not.to.be.null
        expect(order.state('quantity')).to.equal(0) 
        const plus = order.find('[data-test="offers-counter-plus"]')
        expect(plus.length).to.equal(1)
        plus.simulate('click')
        expect(order.state('quantity')).to.equal(1) 
    })
    it('should decrement if greater than 0', function() {
        const order = setup()
        expect(order).not.to.be.null
        const rand = Math.floor(Math.random() * 100)
        order.setState({quantity: rand})
        expect(order.state('quantity')).to.equal(rand)
        const minus = order.find('[data-test="offers-counter-minus"]')
        expect(minus.length).to.equal(1)
        minus.simulate('click')
        expect(order.state('quantity')).to.equal(rand - 1) 
    })

})
