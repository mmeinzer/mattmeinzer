import React from "react";
import Helmet from 'react-helmet';

import styled from 'styled-components';

const Wrapper = styled.article`
  grid-column-start: center;
`

const TitleDate = styled.div`
  margin-bottom: 2.4rem;
  > .title {
    margin-bottom: 0;
  }
  > .pub-date {
    color: hsl(0, 0%, 40%)
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Wrapper>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <TitleDate>
        <h1 className="title">{frontmatter.title}</h1>
        <time dateTime={frontmatter.dateTime} className="pub-date">{frontmatter.dispDate}</time>
      </TitleDate>
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </Wrapper>
  );
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
      }
    }
  }
`;