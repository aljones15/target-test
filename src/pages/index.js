import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ItemQuery from '../components/item'
import Box from '../components/styled/box'
import Row from '../components/styled/row'

//         <Item skip={skip} take={take} />

class IndexPage extends React.PureComponent {
  constructor(props, context) {
    super()
    this.state = {
      skip: 0,
      take: 0
    }
  }
  render() {
    const { skip, take } = this.state;
    return(
      <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Row>
          <Box><ItemQuery /></Box><Box>Two</Box>
        </Row>
        <Row>
          <Box>Three</Box><Box>Four</Box>
        </Row>     
    </Layout>
    );
  }
}

export default IndexPage
