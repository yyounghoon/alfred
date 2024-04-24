'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { palette } from '@/styles/palette';
import NavItem from '@/components/@shared/NavItem';

const menuMap = {
  posts: 'geul',
  photos: 'sajin',
  about: 'sogae',
};

const menuList = Object.entries(menuMap);

function Header() {
  return (
    <Nav>
      <Link href={'/'}>
        <Title>youn younghoon</Title>
      </Link>
      <Menu>
        {menuList.map(([path, name]) => (
          <NavItem key={path} path={path} name={name} />
        ))}
      </Menu>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
`;

const Title = styled.p`
  color: ${palette.black};
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  :hover {
    color: ${palette.hover};
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${palette.black};
    font-size: 22px;
    font-style: normal;
    line-height: normal;

    padding: 0 24px;

    :hover {
      color: ${palette.hover};
      text-decoration: underline;
    }
  }
`;
