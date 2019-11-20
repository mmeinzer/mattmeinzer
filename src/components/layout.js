import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'

import styled from 'styled-components'

import './layout.css'
import 'prismjs/themes/prism-tomorrow.css'

const Wrapper = styled.div`
  display: grid;
  justify-content: space-around;
  grid-gap: 1.6em;
  grid-template-columns: [left]1fr [center]fit-content(740px) [right]1fr;
  padding-top: 2em;
  border-top: 5px solid #1c6ba0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Matthew Meinzer' },
            { name: 'keywords', content: 'Matthew Meinzer, Matt Meinzer' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Wrapper>
    )}
  />
)

export default Layout
