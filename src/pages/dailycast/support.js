import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Wrapper = styled.div`
  grid-column-start: center;
`;

const SupportPage = () => (
  <Layout>
    <Wrapper>
      <h2>Dailycast Support</h2>
      <p>For any support requests or feedback, please email me at meinzer.matthew@gmail.com.</p>
    </Wrapper>
  </Layout>
);

export default SupportPage;
