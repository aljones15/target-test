import React from 'react'
import { Icon } from '@blueprintjs/core'
import { Top, ReviewSection, ReviewTitle, Stars } from './styled/reviews'

class ItemReviews extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            all: false
        }
    }
    makeStars(amount) {
        /**
         * @param {number} amount
         * @description makes a number of star Icons equal to the amount
         * @return {JSX}
         */
        const stars = [];
        for(let i = 0; i < amount; i++) {
            stars.push(<Icon icon="star" />)
        }
        return stars;
    }
    render() {
        const [reviews] = this.props.reviews
        const { consolidatedOverallRating, totalReviews, Con, Pro } = reviews
        console.log('reviews', reviews)
        return(
            <div style={{width: '100%'}}>
                <Top>
                    <span>
                      <Stars>{this.makeStars(consolidatedOverallRating)}</Stars> overall
                    </span>
                    <span>
                        {`view all ${totalReviews} reviews`}
                    </span>
                </Top>
                <div style={{width: '100%'}}>
                    <ReviewSection float="left">
                      <ReviewTitle>
                          Pro
                      </ReviewTitle>
                    </ReviewSection>
                    <ReviewSection float="right">
                      <ReviewTitle>
                          Con
                      </ReviewTitle>

                    </ReviewSection>
                </div>
            </div>
        )
    }
}

export default ItemReviews