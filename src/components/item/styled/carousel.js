import styled from '@emotion/styled'
import { css } from '@emotion/core'


export const Title = styled.h1({
    textAlign: 'center',
    fontSize: '1rem'
  })

  export const ImageHolder = styled.span({
      display: 'inline-block'
  })

  const hover = css({
      border: '1px solid #D3D3D3'
  })

  export const Img = styled.img(({loaded, size}) => ({
    display: loaded ? 'inline-block' : 'none',
    width: size || '50px',
    height: size || '50px',
    ':hover': hover
}))

export const Thumbnails = styled.div({
    width: '150px',
    height: '50px',
    overflowX: 'auto',
    overflowY: 'hidden',
})

export const Stretcher = styled.div(({size}) => ({
    width: `${size * 50}px`
}))