import React from 'react'
import { Icon } from '@blueprintjs/core'
import { Top, TopText, ReviewSection, ReviewTitle, ReviewBody, Stars } from './styled/reviews'

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
        return(
            <div style={{width: '100%'}}>
                <Top>
                    <TopText align="left">
                      <Stars>
                        {this.makeStars(consolidatedOverallRating)}
                      </Stars> overall
                    </TopText>
                    <TopText align="right">
                      {`view all ${totalReviews} reviews`}
                    </TopText>
                </Top>
                <div>
                    <ReviewSection float="left">
                      <ReviewTitle>
                          <h4>Pro</h4>
                          <em>Most helpful 4-5 star review</em>
                      </ReviewTitle>
                      <ReviewBody>
                      <p>
                        <Stars>{this.makeStars(Pro[0].overallRating)}</Stars>
                      </p>
                      <h4>{Pro[0].title}</h4>
                        <p>
                            {Pro[0].review}
                        </p>

                      </ReviewBody>
                    </ReviewSection>
                    <ReviewSection float="right">
                      <ReviewTitle>
                          <h4>Con</h4>
                          <em>Most helpful 1-2 star review</em>
                      </ReviewTitle>
                      <ReviewBody>
                      <p>
                        <Stars>{this.makeStars(Con[0].overallRating)}</Stars>
                      </p>
                        <h4>{Con[0].title}</h4>
                        <p>
                            {Con[0].review}
                        </p>

                      </ReviewBody>
                    </ReviewSection>
                </div>
            </div>
        )
    }
}

export default ItemReviews