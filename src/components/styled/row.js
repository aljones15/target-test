import styled from '@emotion/styled'

const Row = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    margin: 1rem;
    padding: 1rem;
    flex-direction: row;
    align-items: baseline;
    @media (orientation: portrait) {
      flex-direction: column;
      margin: 0px;
      padding: 0px;
    }
  `

  export default Row