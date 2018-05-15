import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  a {
    text-decoration: none;
    color: hsl(0, 0%, 28%);
  }
  > nav a {
    margin: 1em;
  }
  > h1 {
    margin: 0;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
      <h1>
        <Link to="/">
          Matt Meinzer
        </Link>
      </h1>
      <nav>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/about">About</Link>
      </nav>
  </Wrapper>
)

export default Header
