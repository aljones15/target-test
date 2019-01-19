import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Image from '../../src/components/item/image'

describe('<Image />', function() {
    function setup() {
        return shallow(<Image src="fail" />)
    }
    it('should render', function() {
        const comp = setup()
        expect(comp).not.to.be.null
        expect(comp.exists()).to.be.true
    })
})
