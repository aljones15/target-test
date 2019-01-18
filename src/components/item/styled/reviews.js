import styled from '@emotion/styled'

const backgroundColor = '#a9a9a938'

export const Top = styled.div({
    paddingRight: '5px',
    paddingLeft: '5px',
    paddingBottom: '8px',
    width: '100%',
})

export const ReviewSection = styled.div(({float, bg = backgroundColor}) => ({
    backgroundColor: bg,
    float,
    width: '50%',
    height: '20rem',
}))

export const ReviewTitle = styled.div({
    textAlign: 'left',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    padding: '0.25rem',
    marginBottom: '0.5rem',
})

export const ReviewBody = styled.div({
    padding: '1rem',
    paddingTop: '0.25rem'
})

export const Stars = styled.span({
    color: '#ff3b00',
})

export const TopText = styled.span(({align = 'center'})  => ({
    display: 'inline-block',
    width: '50%',
    textAlign: align,
    fontWeight: 'bold',
}))