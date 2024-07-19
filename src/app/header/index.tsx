'use client';

import { useMediaQuery } from 'react-responsive';
import { menu, menuItem, nav, title } from './index.css';
import Link from 'next/link';
import { MobileMenuIcon } from '@/shared/components/Icon';
import { useState } from 'react';
import DrawerMenu from '../DrawerMenu';

const menuMap = {
  posts: '글',
  photos: '사진',
  about: '소개',
};

const menuList = Object.entries(menuMap);

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 960px)',
  });

  const handleDrawerOpen = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className={nav}>
      <Link href={'/'}>
        <h2 className={title}>youn younghoon</h2>
      </Link>
      {isMobile ? (
        <div>
          <MobileMenuIcon onClick={handleDrawerOpen} />
        </div>
      ) : (
        <div className={menu}>
          {menuList.map(([path, name]) => (
            <Link key={path} href={path}>
              <div key={name} className={menuItem}>
                {name}
              </div>
            </Link>
          ))}
        </div>
      )}
      {isDrawerOpen && <DrawerMenu setIsDrawerOpen={setIsDrawerOpen} />}
    </nav>
  );
}

export default Header;
