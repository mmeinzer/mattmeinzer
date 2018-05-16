import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Wrapper = styled.header`
  grid-column-start: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: hsl(0, 0%, 28%);
  }
  > nav a {
    margin-left: 1em;
  }
  > nav a:hover {
    border-bottom: 2px solid hsl(0, 0%, 28%);
  }
  > .site-name {
    font-size: 1.5em;
    font-weight: 700;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
      <span className="site-name">
        <Link to="/">
          Matt Meinzer
        </Link>
      </span>
      <nav>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/about">About</Link>
      </nav>
  </Wrapper>
)

export default Header
