import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Wrapper = styled.section`
  grid-column: 2;
  grid-row: 3;
`

const IndexPage = () => (
  <Wrapper>
    <h2>Welcome</h2>
    <p>Web developer</p>
  </Wrapper>
)

export default IndexPage
