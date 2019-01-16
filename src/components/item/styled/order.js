import styled from '@emotion/styled'

export const Price = styled.h3({
    textAlign: 'center',
    fontSize: '1rem',
    display: 'inline'
  })

  export const Text = styled.span(({color}) => ({
      color,
      fontSize: '0.5rem'
  }))

  export const Promotions = styled.div({
      borderTop: "1px solid rgba(0,0,0,0.1)",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      margin: '1rem',
      padding: '0.25rem',
      color: '#c50f0f'
  })