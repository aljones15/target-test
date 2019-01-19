class HighlightsPage {
    get highlights() {
        return $('[data-test="highlights"]')
    }
    get list() {
        return $('[data-test="highlights-list"]')
    }
    get items() {
        return $$('[data-test="highlights-list-item"]')
    } 
}

export default HighlightsPage
