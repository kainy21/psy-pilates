import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import Intro from './sections/Intro';
import About from './sections/About';
import Services from './sections/Services';

export default function App() {
  return (
    <>
      <Intro />
      <About />
      {/*     Grettings, Teachers, facilities */}
      <Services />
      {/*     Pilates, PT, exbody system: body type analysis */}
      {/* Location  */}
      {/* Contect & FAQs & Q&A & Contect */}
    </>
  );
}

const BG = styled.div`
  margin: 0;
  padding: 5vw;
  // background-color: #282c34;
  height: 100vh;
`;
