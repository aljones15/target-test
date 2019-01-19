import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Order from '../../src/components/item/order'
import Data from '../../resources/items.json'

describe('<Order />', function() {
    function setup() {
        const {CatalogEntryView: [entry]} = Data
        const { Promotions, Offers, ReturnPolicy } = entry
        return mount(<Order promos={Promotions} offers={Offers} returns={ReturnPolicy} />)
    }
    it('should render', function() {
        const order = setup()
        expect(order).not.to.be.null
    })
})
