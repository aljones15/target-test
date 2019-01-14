import React from 'react'
import { Spinner } from "@blueprintjs/core";
import {Img, ImageHolder } from './styled/carousel'
import missing from "../../../resources/MissingImage.jpg"

class Image extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            loaded: false,
            error: false
        }
    }
    handleError = () => this.setState(() => ({loaded: true, error: true}))
    handleLoad = () => this.setState(() => ({loaded: true}))
    render() {
        const { src, size } = this.props;
        const { loaded, error } = this.state;
        const uri = error ? missing : src
        return(
            <ImageHolder>
              <Img alt="product image" size={size} loaded={loaded} src={uri} onError={this.handleError} onLoad={this.handleLoad} />
              {loaded ? null :  <Spinner />}
            </ImageHolder>
        )
    }
}

export default Image