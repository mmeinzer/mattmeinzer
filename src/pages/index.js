import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Wrapper = styled.section`
  grid-column-start: center;
  padding: 1em;
  > * {
    text-align: center;
  }
  .email-form {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 2fr 3fr 2fr;
    justify-items: stretch;
    margin-bottom: 0;
  }
  .headline {
    font-weight: normal;
    font-family: 'Roboto';
    grid-column: 1 / 4;
    margin-bottom: 0;
  }
  .email-input {
    grid-column: 2;
    padding: .1em;
  }
  .submit-button {
    grid-column: 2;
    background: #1c6ba0;
    color: #fff;
    padding: .4em;
    border: none;
    cursor: pointer;
  }
`

const IndexPage = () => (
  <Wrapper>
    <h1 className="heading">I'm on a JavaScript learning journey</h1>
    <form className="email-form" action="https://www.getdrip.com/forms/83275181/submissions" method="post" data-drip-embedded-form="83275181">
      <h3 className="headline" data-drip-attribute="headline">
      Sign up for my once-a-week email with JavaScript tricks and tips to help you become a job-ready developer.
      </h3>
      <input className="email-input" type="email" id="drip-email" name="fields[email]" placeholder="Your email address..." />
      <div className="g-recaptcha" data-sitekey="6Le7wFsUAAAAAAnU2H7inCovL-I1eQIBOPRimksY"></div>
      <input className="submit-button" type="submit" value="Join now" data-drip-attribute="sign-up-button" />
    </form>
  </Wrapper>
)

export default IndexPage
