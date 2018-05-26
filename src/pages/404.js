import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  grid-column-start: center;
  justify-self: center;
`

const NotFoundPage = () => (
  <Wrapper>
    <h1>That page doesn't exist</h1>
    <p>Let's get outta here...</p>
  </Wrapper>
)

export default NotFoundPage
