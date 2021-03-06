import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Reviews from '../../src/components/item/reviews'
import Data from '../../resources/items.json'

describe('<Reviews />', function() {
    function setup() {
        const {CatalogEntryView: [entry]} = Data
        const { CustomerReview } = entry
        return shallow(<Reviews reviews={CustomerReview} />)
    }
    it('should render', function() {
        const comp = setup()
        expect(comp).not.to.be.null
        expect(comp.exists()).to.be.true
    })
})
