import ItemPage from '../pages/item'
import { expect } from 'chai'

const itemPage = new ItemPage()

describe('Item Page', function() {
    it('should visit the main page', function() {
        browser.url('/')
    })
    
    it('should see an item', function() {
        const vis = itemPage.item.waitForDisplayed(5000)
        expect(vis, 'expected item to display').to.be.true
    })
    it('should see an orderBox', function() {
        const vis = itemPage.orderBox.waitForDisplayed(5000)
        expect(vis, 'expected orderBox to be display').to.be.true
    })
    it('should see an reviewsBox', function() {
        const vis = itemPage.reviewsBox.waitForDisplayed(5000)
        expect(vis, 'expected reviewsBox to display').to.be.true
    })
    it('should see an highlightsBox', function() {
        const vis = itemPage.highlightsBox.waitForDisplayed(5000)
        expect(vis, 'expected highlightsBox to display').to.be.true
    })
    it('should see an carouselBox', function() {
        const vis = itemPage.carouselBox.waitForDisplayed(5000)
        expect(vis, 'expected carouselBox to display').to.be.true
    })
})
