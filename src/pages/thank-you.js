import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Wrapper = styled.div`
  grid-column-start: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ThankYouPage = () => (
  <Layout>
    <Wrapper>
      <h1>Thank you for subscribing!</h1>
      <p>Please check your email to confirm your subscription</p>
    </Wrapper>
  </Layout>
)

export default ThankYouPage
