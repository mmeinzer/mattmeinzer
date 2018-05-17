import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const lightGray = 'hsl(0, 0%, 28%)'
const darkGray = 'hsl(0, 0%, 20%)'

const Wrapper = styled.header`
  grid-column-start: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: ${lightGray};
  }
  > nav a {
    margin-left: 1em;
  }
  > nav a:hover {
    border-bottom: 2px solid ${lightGray};
  }
  > .site-name > a {
    font-family: 'Lora';
    font-size: 2em;
    color: ${darkGray};
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
