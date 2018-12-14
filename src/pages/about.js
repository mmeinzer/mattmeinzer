import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Wrapper = styled.div`
  grid-column-start: center;
`

const AboutPage = () => (
  <Layout>
    <Wrapper>
      <h2>About</h2>
    </Wrapper>
  </Layout>
)

export default AboutPage
