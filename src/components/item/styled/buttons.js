import styled from '@emotion/styled'
import { css } from '@emotion/core'

const hover = css({
    border: '1px solid black',
    boxShadow: '5px 5px black'
})

export const BoxButton = styled.button(({color = ""}) => ({
  backgroundColor: color,
  color: "white",
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  border: '1px solid white',
  borderRadius: '5%',
  ':hover': hover,
  width: '200px'
}))

export const RoundButton = styled.button({
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  borderRadius: '6%',
  backgroundColor: '#a9a9a938',
  marginRight: '0.25rem',
  border: '1px solid darkgrey',
  fontSize: '0.5rem',
  width: '130px'
})