import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import styled from 'styled-components'

import './index.css'
import 'prismjs/themes/prism-tomorrow.css'

const blue = '#1c6ba0'

const Wrapper = styled.div`
  display: grid;
  justify-content: space-around;
  grid-gap: 1.6em;
  grid-template-columns: [left]1fr [center]fit-content(740px) [right]1fr;
  padding-top: 2em;
  border-top: 5px solid ${blue};
`

const Layout = ({ children, data }) => (
  <Wrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: `Matthew Meinzer` },
        { name: 'keywords', content: 'Matthew Meinzer, Matt Meinzer' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
  </Wrapper>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
