import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

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
    padding: .2em;
    text-align: center;
    border: 2px solid ${theme.colors.blue};
  }
  .submit-button {
    box-shadow: ${theme.boxShadow.high};
    grid-column: 2;
    background: ${theme.colors.blue};
    transition: background .2s;
    color: #fff;
    padding: .4em;
    border: none;
    cursor: pointer;
  }
  .submit-button:hover {
    background: ${theme.colors.darkBlue};
    box-shadow: ${theme.boxShadow.low};
  }
  .highlight {
    background-image: linear-gradient(to right, rgba(255, 255, 0, .8) 100%, rgba(255, 255, 0, 0.8) 0%);
  }
`

const IndexPage = props => (
  <Wrapper>
    <h1 className="heading">Looking to get hired as a full-time JavaScript developer?</h1>
    <form className="email-form" action="https://www.getdrip.com/forms/83275181/submissions" method="post" data-drip-embedded-form="83275181">
      <p className="headline" data-drip-attribute="headline">
      Sign up for my once-a-week email with JavaScript tricks and tips to help you <span className="highlight">become a job-ready developer.</span>
      </p>
      <input className="email-input" type="email" id="drip-email" name="fields[email]" placeholder="Your email address..." />
      <div className="g-recaptcha" data-sitekey="6Le7wFsUAAAAAAnU2H7inCovL-I1eQIBOPRimksY"></div>
      <input className="submit-button" type="submit" value="Join now" data-drip-attribute="sign-up-button" />
    </form>
    <PostList posts={props.data.allMarkdownRemark.edges} />
  </Wrapper>
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
