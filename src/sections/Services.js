import styled from '@emotion/styled';
import React, { useRef, useEffect, useState } from 'react';

export default function Services() {
  const [scrollHeight, setScrollHeight] = useState();

  const SectionRef = useRef();
  useEffect(() => {
    setScrollHeight(document.getElementsByClassName('section')[2].scrollTop);
  }, []);

  console.log('scrollHeight--', scrollHeight);

  return (
    <Section ref={SectionRef} className="section">
      <Main className="subpage">
        <h1>2. Services</h1>
      </Main>
      <Pilates className="subpage">
        <h4 className="subtitle">2.1 Pilates</h4>
      </Pilates>
      <PT className="subpage">
        <h4 className="subtitle">2.2 Personal Training</h4>
      </PT>
      <BodyAnalysis className="subpage">
        <h4 className="subtitle">2.3 Body Analysis</h4>
      </BodyAnalysis>
      <BeforeAfter className="subpage">
        <h4 className="subtitle">2.4 Before After</h4>
      </BeforeAfter>
    </Section>
  );
}
const Section = styled.section`
  border-color: green;
  height: 450vh;
`;

const Main = styled.div`
  background-image: url('/sample/yoga2.jpg');
  background-size: cover;
  background-position: right;
  height: 80vh;
  z-index: 5;
`;

// #333533
// #242423
// #f5cb5c
// #e8eddf
// #cfdbd5
const Pilates = styled.div`
  background-color: #333533;
  height: 85vh;
  z-index: 4;
`;

const PT = styled.div`
  background-color: #edf2f4;
  color: #333533;
  height: 90vh;
  z-index: 3;
`;

const BodyAnalysis = styled.div`
  background-color: #333533;
  height: 95vh;
  z-index: 2;
`;

const BeforeAfter = styled.div`
  background-color: #edf2f4;
  color: #333533;
  height: 100vh;
  z-index: 1;
`;
