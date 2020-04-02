import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/PostList'

const Wrapper = styled.section`
  grid-column-start: center;
  padding: 1em;
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
