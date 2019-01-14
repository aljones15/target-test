import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Item from '../components/item'


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
      <Item skip={skip} take={take} />
    </Layout>
    );
  }
}

export default IndexPage
