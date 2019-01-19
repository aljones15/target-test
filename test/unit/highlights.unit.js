import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Highlights from '../../src/components/item/highlights'
import Data from '../../resources/items.json'

describe('<Highlights />', function() {
    function setup() {
        const {CatalogEntryView: [entry]} = Data
        const { ItemDescription } = entry
        return shallow(<Highlights description={ItemDescription} />)
    }
    it('should render', function() {
        const comp = setup()
        expect(comp).not.to.be.null
        expect(comp.exists()).to.be.true
    })
})
