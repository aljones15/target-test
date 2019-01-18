import styled from '@emotion/styled'

const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.5rem;
    max-height: 50%;
    max-width: 50%;
    width: 50%;
    height: 50%;
    @media (orientation: portrait) {
      margin: 0px;
      padding: 0px;
      width: 100%;
      max-width: 100%;
    }
  `

  export default Box