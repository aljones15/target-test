import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Carousel from '../../src/components/item/carousel'
import Data from '../../resources/items.json'

describe('<Carousel />', function() {
    function setup() {
        const {CatalogEntryView: [entry]} = Data
        const { Images, title } = entry
        return shallow(<Carousel images={Images} title={title} />)
    }
    it('should render', function() {
        const comp = setup()
        expect(comp).not.to.be.null
        expect(comp.exists()).to.be.true
    })
})
