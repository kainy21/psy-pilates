import styled from '@emotion/styled';
import React from 'react';

export default function Intro() {
  return (
    <Section className="section">
      <Img src="/sample/christmas2.jpg" alt="main" />
      <div></div>
    </Section>
  );
}

// transform: matrix(1, 0, 0, 1, 0, 0);

const Section = styled.section`
  height: 130vh;
  margin-top: 2vh;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  transform: scale(1.5);
  height: 100%;
  width: 100%;
`;
