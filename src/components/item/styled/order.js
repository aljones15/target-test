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
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      color: '#c50f0f'
  })

  export const PromoItem = styled.p({
      margin: '0px',
      marginBottom: '0px',
      fontSize: '0.75rem',
      color: '#e23636'
  })

  export const Padded = styled.div({
      marginBottom: '1rem',
      marginTop: '1rem'
  })