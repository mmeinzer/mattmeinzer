import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Wrapper = styled.div`
  grid-column-start: center;
  justify-self: center;
`

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <h1>That page doesn't exist</h1>
      <p>Let's get outta here...</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
