import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'

import styled from 'styled-components'

import './index.css'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [left]1fr [center]auto [right]1fr;
  padding-top: 2em;
  border-top: 4px solid #1c6ba0;
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
