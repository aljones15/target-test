class CarouselPage {
    get carousel() {
        return $('[data-test="carousel"]')
    }
    get title() {
        return $('[data-test="carousel-title"]')
    } 
    get mainImage() {
        return $('[data-test="carousel-main-image"]')
    } 
    get thumbNails() {
        return $('[data-test="carousel-thumbnails"]')
    } 
    get stretcher() {
        return $('[data-test="carousel-stretcher"]')
    }
    get images() {
        return $$('[data-test="carousel-img"]')
    } 
}

export default CarouselPage
