import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Reviews from '../../src/components/item/reviews'
import Data from '../../resources/items.json'

describe('<Order />', function() {
    function setup() {
        const {CatalogEntryView: [entry]} = Data
        const { CustomerReview } = entry
        return shallow(<Reviews reviews={CustomerReview} />)
    }
    it('should render', function() {
        const order = setup()
        expect(order).not.to.be.null
        expect(order.exists()).to.be.true
    })
})
