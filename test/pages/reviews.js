class ReviewsPage {
    get reviews() {
        return $('[data-test*="reviews-page"]')
    }
    get top() {
        return $('[data-test*="reviews-top"]')
    }
    get pro() {
        return $('[data-test*="reviews-pro"]')
    }
    get con() {
        return $('[data-test*="reviews-con"]')
    }
}

export default ReviewsPage
