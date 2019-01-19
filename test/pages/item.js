

class ItemPage {
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
