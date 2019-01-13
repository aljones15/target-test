import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ItemQuery from '../components/item'

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
        <Image />
        <ItemQuery />
    </Layout>
    );
  }
}

export default IndexPage
