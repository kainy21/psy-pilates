import styled from '@emotion/styled';
import React from 'react';

export default function Intro() {
  return (
    <Section
      style={{
        backgroundImage: "url('/sample/bg1.jpg')"
      }}
    >
      <div></div>
    </Section>
  );
}

// transform: matrix(1, 0, 0, 1, 0, 0);
const Section = styled.section`
  background-size: cover;
  background-position: center;
  height: 130vh;
  margin-top: 2vh;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
