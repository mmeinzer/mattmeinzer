import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Wrapper = styled.section`
  grid-column-start: center;
  padding: 1em;
  .heading {
    text-align: center;
  }
`

const IndexPage = () => (
  <Wrapper>
    <h1 className="heading">I'm documenting my JavaScript learning journey</h1>
    <div className="sign-up">
    </div>  
  </Wrapper>
)

export default IndexPage
