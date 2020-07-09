import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background: #111111;
  padding-top: 4rem;
  padding-bottom: 2rem;
  text-align: center;
`;
const FooterBlock = styled.div`
  font-size: 1rem;
  color: #ffffff;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <FooterBlock>@2020 Netflix Clone Coding</FooterBlock>
    </Footer>
  );
};

export default FooterComponent;
