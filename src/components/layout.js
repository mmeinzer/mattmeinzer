import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import Header from './Header'

import 'prismjs/themes/prism-tomorrow.css' // Code highlighting
import './layout.css'

import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import faviron48 from '../images/favicon.ico'

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
            {
              name: 'description',
              content:
                "I'm a professional full-stack web developer living and working in Minneapolis, Minnesota",
            },
          ]}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: `${favicon16}`,
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: `${favicon32}`,
            },
            { rel: 'shortcut icon', type: 'image/png', href: `${faviron48}` },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Wrapper>
    )}
  />
)

export default Layout
