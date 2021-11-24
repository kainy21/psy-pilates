import React from 'react';
import styled from '@emotion/styled';
import Menu from './Menu';

export default function Header() {
  return (
    <>
      <Logo href="/">
        <LogoImg src="/logo.png" alt="" />
      </Logo>
      <Menu />
    </>
  );
}

const Logo = styled.a`
  background: none;
  border: none;
  position: fixed;
  width: 100vw;
`;

const LogoImg = styled.img`
  width: 90%;
`;
