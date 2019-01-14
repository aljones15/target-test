import React from 'react'
import Image from './image'
import { Title, Thumbnails, Stretcher } from './styled/carousel'
import { Alert } from '@blueprintjs/core';

class Carousel extends React.PureComponent {
    constructor(props, context) {
        super();
        this.state = {
            currentImage: null
        }
    }
    render() {
        const {title, images = [] } = this.props;
        const [uris] = images
        const Primary = uris.PrimaryImage[0].image
        const Alternatives = uris.AlternateImages || []
        return(
            <div>
                <Title>{title}</Title>
                <div id="main-image">
                  <Image src={Primary} size="200px" />
                </div>
                <Thumbnails id="carousel">
                  <Stretcher size={Alternatives.length}>
                    {Alternatives.map(({image}) => <Image key={image} src={image} />)}
                  </Stretcher>
                </Thumbnails>
            </div>
        )
    }
}

export default Carousel