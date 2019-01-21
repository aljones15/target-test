import styled from '@emotion/styled'
import { css } from '@emotion/core'


export const Title = styled.h1({
    textAlign: 'center',
    fontSize: '1rem',
    width: '80%'
  })

  export const ImageHolder = styled.span({
      display: 'inline-block'
  })

  const hover = css({
      border: '1px solid #D3D3D3'
  })

  export const Img = styled.img(({loaded, size}) => ({
    display: loaded ? 'inline-block' : 'none',
    width: size || '100px',
    height: size || '100px',
    ':hover': hover
}))

export const Thumbnails = styled.div({
    width: '300px',
    height: '100px',
    overflowX: 'auto',
    overflowY: 'hidden',
})

export const Stretcher = styled.div(({size}) => ({
    width: `${size * 100}px`
}))

export const Container = styled.div({
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
})