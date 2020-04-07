import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Wrapper = styled.div`
  grid-column-start: center;
`

const AboutPage = () => (
  <Layout>
    <Wrapper>
      <h1>About Me</h1>
      <p>I'm a professional full-stack developer living and working in Minneapolis, Minnesota.</p>
      <p>I mostly write JavaScript, but I also work with Go, PHP, and Elixir.</p>
    </Wrapper>
  </Layout>
)

export default AboutPage
