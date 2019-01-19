import React from 'react'
import Image from './image'
import { Title, Thumbnails, Stretcher, Container } from './styled/carousel'
import { Icon } from '@blueprintjs/core';

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
            <Container data-test="carousel">
                <Title data-test="carousel-title">{title}</Title>
                <div id="main-image" data-test="carousel-main-image">
                  <Image src={Primary} size="300px" />
                </div>
                <div>
                <Icon icon="zoom-in" /> <span>view larger</span>
                </div>
                <Thumbnails id="carousel" data-test="carousel-thumbnails">
                  <Stretcher size={Alternatives.length} data-test="carousel-stretcher">
                    {Alternatives.map(({image}) => <Image data-test="carousel-img" key={image} src={image} />)}
                  </Stretcher>
                </Thumbnails>
            </Container>
        )
    }
}

export default Carousel
