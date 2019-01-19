import ItemPage from '../pages/item'
import { expect } from 'chai'

const itemPage = new ItemPage()

describe('Item Page', function() {
    it('should visit the main page', function() {
        browser.url('/')
    })
    
    it('should see an Item', function() {
        const vis = itemPage.item.waitForDisplayed(5000)
        expect(vis, 'expected item to display').to.be.true
    })
    it('should see an Order Box', function() {
        const vis = itemPage.orderBox.waitForDisplayed(5000)
        expect(vis, 'expected orderBox to be display').to.be.true
    })
    it('should see a Reviews Box', function() {
        const vis = itemPage.reviewsBox.waitForDisplayed(5000)
        expect(vis, 'expected reviewsBox to display').to.be.true
    })
    it('should see a Highlights Box', function() {
        const vis = itemPage.highlightsBox.waitForDisplayed(5000)
        expect(vis, 'expected highlightsBox to display').to.be.true
    })
    it('should see a Carousel Box', function() {
        const vis = itemPage.carouselBox.waitForDisplayed(5000)
        expect(vis, 'expected carouselBox to display').to.be.true
    })

    it('should see the image carousel', function() {
        const { carousel } = itemPage
        expect(carousel.carousel.isDisplayed(),'carousel was not visible').to.be.true
        expect(carousel.title.isDisplayed(), 'carousel title was not visible').to.be.true
        expect(carousel.mainImage.isDisplayed(), 'carousel main image not vis').to.be.true
        expect(carousel.thumbNails.isDisplayed(), 'carousel thumb nails not vis').to.be.true
        expect(carousel.stretcher.isDisplayed(), 'carousel stretcher not vis').to.be.true
    })

    it('should see the orders', function() {
        const { orders } = itemPage
        expect(orders.orders.isDisplayed(),'orders was not visible').to.be.true
        expect(orders.price.isDisplayed(), 'orders price was not visible').to.be.true
        expect(orders.promotions.isDisplayed(), 'orders promotions not vis').to.be.true
        expect(orders.counter.isDisplayed(), 'orders counter not vis').to.be.true
        expect(orders.minus.isDisplayed(), 'orders minus not vis').to.be.true
        expect(orders.plus.isDisplayed(), 'orders plus not vis').to.be.true
    })

    it('should see the highlights', function() {
        const { highlights } = itemPage
        highlights.list.scrollIntoView()
        expect(highlights.highlights.isExisting(),'highlights was not visible').to.be.true
        expect(highlights.list.isDisplayed(), 'highlights list was not visible').to.be.true
    })

    it('should see the reviews', function() {
        const { reviews } = itemPage
        reviews.con.scrollIntoView()
        expect(reviews.reviews.isExisting(),'reviews was not visible').to.be.true
        expect(reviews.top.isDisplayed(), 'reviews top was not visible').to.be.true
        expect(reviews.pro.isDisplayed(), 'reviews pro not vis').to.be.true
        expect(reviews.con.isDisplayed(), 'reviews con not vis').to.be.true
    })

})
