import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/layout'

const Wrapper = styled.article`
  grid-column-start: center;
  overflow: auto;
  margin-top: 0.6em;
`

const TitleDate = styled.div`
  margin-bottom: 2.4em;
  > .title {
    margin-bottom: 0;
  }
  > .pub-date {
    color: hsl(0, 0%, 40%);
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Wrapper>
        <Helmet
          meta={[
            {
              name: 'description',
              content: frontmatter.metaDescription
                ? frontmatter.metaDescription
                : '',
            },
          ]}
        >
          <title>{frontmatter.title}</title>
        </Helmet>
        <TitleDate>
          <h1 className="title">{frontmatter.title}</h1>
          <time dateTime={frontmatter.dateTime} className="pub-date">
            {frontmatter.dispDate}
          </time>
        </TitleDate>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        dispDate: date(formatString: "MMMM DD, YYYY")
        dateTime: date(formatString: "YYYY-MM-DD")
        path
        title
        metaDescription
      }
    }
  }
`
