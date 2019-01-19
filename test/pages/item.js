import CarouselPage from './carousel'
import HighlightsPage from './highlights'
import OrderPage from './order'
import Reviews from './reviews'

class ItemPage {
    constructor() {
        this.carousel = new CarouselPage()
        this.highlights = new HighlightsPage()
        this.orders = new OrderPage()
        this.reviews = new Reviews()
    }
    get item() {
        return $('[data-test="item-page"]')
    }
    get orderBox() {
        return $('[data-test="order-box"]')
    }
    get reviewsBox() {
        return $('[data-test="reviews-box"]')
    }
    get highlightsBox() {
        return $('[data-test="highlights-box"]')
    }
    get carouselBox() {
        return $('[data-test="carousel-box"]')
    }
}

export default ItemPage
