import styled from '@emotion/styled'

const backgroundColor = '#a9a9a938'

export const Top = styled.div({
    paddingRight: '5px',
    paddingLeft: '5px',
    width: '100%'
})

export const ReviewSection = styled.div(({float, bg = backgroundColor}) => ({
    backgroundColor: bg,
    float,
    width: '50%'
}))

export const ReviewTitle = styled.div({
    textAlign: 'left',
    borderBottom: '1px solid black'
})

export const Stars = styled.span({
    color: 'orange',
    fontSize: '1.5rem'
})