import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <BG className="App">
        <Header />
        <Routes>
          <Route path="/about" />
          <Route path="/program" />
          <Route path="/community" />
          <Route path="/qna" />
          <Route path="/map" />
          <Route path="/" element={<Home />} />
        </Routes>
      </BG>
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
