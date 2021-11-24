import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const menuTabs = [
  {
    title: 'About',
    pathname: '/about',
    subTab: ['인사말', '강사소개', '시설안내']
  },
  {
    title: 'Program',
    pathname: '/program',
    subTab: ['필라테스', 'PT', '체형분석']
  },
  {
    title: 'Community',
    pathname: '/community',
    subTab: ['공지사항', '갤러리']
  },
  { title: 'Q & A', pathname: '/qna' },
  { title: 'Map', pathname: '/map' }
];
export default function Menu() {
  const location = useLocation();
  const highlight = tab => tab === location.pathname;
  return (
    <MenuBar>
      {menuTabs.map((tab, index) => {
        console.log(highlight(tab.pathname));
        return (
          <Link
            key={index}
            href={tab.pathname}
            style={{
              backgroundColor: highlight(tab.pathname) ? '#cfa716' : 'none'
            }}
          >
            {tab.title}
          </Link>
        );
      })}
    </MenuBar>
  );
}

const MenuBar = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: fixed;
  left: 0;
  line-height: 45px;
  width: 100%;
`;

const Link = styled.a`
  background: none;
  border: none;
  color: #faf8ff;
  flex: 1;
  font-size: 1.5em;
  text-align: center;
  text-decoration: none;
  padding: auto;
  width: 100%;
`;
