import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const lightGray = 'hsl(0, 0%, 56%)'
const middleGray = 'hsl(0, 0%, 28%)'
const darkGray = 'hsl(0, 0%, 20%)'

const Wrapper = styled.header`
  grid-column-start: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .4em;
  border-bottom: 2px solid ${lightGray};
  a {
    text-decoration: none;
  }
  > nav a {
    color: ${middleGray};
    margin-left: 1em;
  }
  > nav a:hover {
    border-bottom: 2px solid ${middleGray};
  }
  > .site-name {
  }
  > .site-name > a {
    line-height: 1em;
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
