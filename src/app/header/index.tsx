'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { palette } from '@/styles/palette';
import NavItem from '@/components/@shared/NavItem';
import { menu, nav, title } from './index.css';

const menuMap = {
  posts: 'geul',
  photos: 'sajin',
  about: 'sogae',
};

const menuList = Object.entries(menuMap);

function Header() {
  return (
    <nav className={nav}>
      <Link href={'/'}>
        <h2 className={title}>youn younghoon</h2>
      </Link>
      <div className={menu}>
        {menuList.map(([path, name]) => (
          <NavItem key={path} path={path} name={name} />
        ))}
      </div>
    </nav>
  );
}

export default Header;
