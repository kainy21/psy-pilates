import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';

export default function App() {
  return (
    <Router>
      <BG className="App"></BG>
    </Router>
  );
}

const BG = styled.div`
  margin: 0;
  padding: 5vw;
  // background-color: #282c34;
  background-color: #232323;
  width: 100vw;
  height: 100vh;
`;
