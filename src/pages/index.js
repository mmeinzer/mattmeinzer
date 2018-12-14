import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/PostList'
import theme from '../utils/theme'

const Wrapper = styled.section`
  grid-column-start: center;
  padding: 1em;
  > * {
    text-align: center;
  }
  .email-form {
    background: hsl(0, 0%, 95%);
    padding: 1.2em;
    display: grid;
    grid-gap: 1.2em;
    grid-template-columns: 2fr 3fr 2fr;
    justify-items: stretch;
    margin-bottom: 1.6rem;
    box-shadow: ${theme.boxShadow.low};
  }
  .headline {
    font-weight: normal;
    font-family: 'Roboto';
    line-height: 1.2;
    font-size: 1.2em;
    grid-column: 1 / 4;
    margin-bottom: 0;
  }
  .email-input {
    grid-column: 2;
    padding: 0.2em;
    text-align: center;
    border: 2px solid ${theme.colors.blue};
  }
  .submit-button {
    box-shadow: ${theme.boxShadow.high};
    grid-column: 2;
    background: ${theme.colors.blue};
    transition: background 0.2s;
    color: #fff;
    padding: 0.4em;
    border: none;
    cursor: pointer;
  }
  .submit-button:hover {
    background: ${theme.colors.darkBlue};
    box-shadow: ${theme.boxShadow.low};
  }
`

const IndexPage = props => (
  <Layout>
    <Wrapper>
      <PostList posts={props.data.allMarkdownRemark.edges} />
    </Wrapper>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
            live
          }
        }
      }
    }
  }
`

export default IndexPage
