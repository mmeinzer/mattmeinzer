import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
`

const Header = ({ siteTitle }) => (
  <header>
      <Title>
        <Link to="/">
          {siteTitle}
        </Link>
      </Title>
  </header>
)

export default Header
