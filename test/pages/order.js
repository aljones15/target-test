class OrderPage {
   get orders() {
       return $('[data-test="offers-page"]')
   } 
   get price() {
       return $('[data-test="offer-price"]')
   } 
   get promotions() {
       return $('[data-test="offers-promotions"]')
   } 
   get counter() {
       return $('[data-test="offers-counter"]')
   } 
   get minus() {
       return $('[data-test="offers-counter-minus"]')
   } 
   get plus() {
       return $('[data-test="offers-counter-plus"]')
   } 
}

export default OrderPage
