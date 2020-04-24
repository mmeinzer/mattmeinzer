import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Wrapper = styled.div`
  grid-column-start: center;
`

const ThankYouPage = () => (
  <Layout>
    <Wrapper>
      <h1>Thanks for subscribing!</h1>
    </Wrapper>
  </Layout>
)

export default ThankYouPage
