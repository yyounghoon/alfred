'use client';

import { useMediaQuery } from 'react-responsive';
import { menu, nav, title } from './index.css';
import Link from 'next/link';
import { MobileMenuIcon } from '@/shared/components/Icon';
import { useState } from 'react';
import DrawerMenu from '../DrawerMenu';
import { CONSTANTS } from '@/shared/constants';
import Category from '../Category';

const categoryList = Object.values(CONSTANTS.CATEGORY);

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 960px)',
  });

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className={nav}>
      <Link href={'/'}>
        <h2 className={title}>youn younghoon</h2>
      </Link>
      <DrawerMenu
        isOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      {isMobile ? (
        <>{!isDrawerOpen && <MobileMenuIcon onClick={handleDrawerToggle} />}</>
      ) : (
        <div className={menu}>
          {categoryList.map((title) => (
            <Category key={title} title={title} />
          ))}
        </div>
      )}
    </nav>
  );
}

export default Header;
