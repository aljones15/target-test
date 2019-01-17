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
      marginTop: '1rem',
      width: '100%'
  })

  export const Returns = styled.span({
      marginRight: '1rem',
      fontSize: '1.2rem',
      color: 'grey',
      width: '100%'
  })

  export const ReturnDetails = styled.span({
      fontSize: '0.5rem',
      marginLeft: '0.5rem',
      wordWrap: 'break-word',
      width: '60%',
      float: 'left',
      textAlign: 'left',
      verticalAlign: 'middle'
  })

  export const ReturnTitle = styled.span({
    paddingRight: '0.5rem',
    fontSize: '100%',
    color: 'grey',
    borderRight: '1px solid grey',
    width: '4em',
    height: '1.4rem',
    float: 'left'
  })