import React from 'react';
import styled from '@emotion/styled';

export default function About() {
  // GREETINGS , PSY, TEACHERS, Facilites
  return (
    <Section>
      <Main
        className="subpage"
        style={{
          backgroundImage: "url('/assets/psy_main.jpeg')"
        }}
      >
        <h1>1. About</h1>
      </Main>
      <PSY className="subpage">
        <h4 className="subtitle">1.1 Park So Young</h4>
      </PSY>
      <Teachers className="subpage">
        <h4 className="subtitle">1.2 Instructors</h4>
      </Teachers>
      <Facilities className="subpage">
        <h4 className="subtitle">1.3 Facilities</h4>
      </Facilities>
    </Section>
  );
}

const Section = styled.section`
  height: 370vh;
`;

// background-image: url('/assets/psy_main.jpg');
const Main = styled.div`
  background-size: cover;
  background-position: center;
  height: 85vh;
  z-index: 4;
`;

const PSY = styled.div`
  height: 90vh;
  z-index: 3;
`;

const Teachers = styled.div`
  height: 95vh;
  z-index: 2;
`;

const Facilities = styled.div`
  height: 100vh;
  z-index: 1;
`;
