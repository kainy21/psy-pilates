import styled from '@emotion/styled';
import React from 'react';

export default function Home() {
  return (
    <Page>
      <img src="/assets/psy_main.jpeg" alt="" />
      <h1>HOME</h1>
    </Page>
  );
}

const Page = styled.div`
  position: relative;
  left: 0;
  top: 35vw;
`;
