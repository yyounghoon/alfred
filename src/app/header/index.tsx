'use client';

import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { MobileMenuIcon } from '@/shared/components/Icon';
import { useContext, useEffect, useState } from 'react';
import DrawerMenu from '../DrawerMenu';
import { CONSTANTS } from '@/shared/constants';
import Category from '../Category';
import LinkedInIcon from '@/shared/components/Icon/LinkedInIcon';
import EmailIcon from '@/shared/components/Icon/EmailIcon';
import GithubIcon from '@/shared/components/Icon/GithubIcon';
import styles from './index.module.scss';
import DarkIcon from '@/shared/components/Icon/DarkIcon';
import LightIcon from '@/shared/components/Icon/LightIcon';
import { ThemeContext } from '../ThemeProvider';
import Toggle from '@/shared/components/Toggle';

const categoryList = Object.values(CONSTANTS.CATEGORY);

function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 960px)',
  });

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <h2 className={styles.logo}>youn younghoon</h2>
      </Link>
      <DrawerMenu
        isOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      {isMobile ? (
        <>
          {!isDrawerOpen && (
            <button onClick={handleDrawerToggle} className={styles.closeBtn}>
              <MobileMenuIcon isDarkMode={isDarkMode} />
            </button>
          )}
        </>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            {categoryList.map((title) => (
              <Category key={title} title={title} />
            ))}
          </div>
          <Toggle />

          {/* <div className={styles.icons}>
            <Link href={'mailto:younghoondev@gmail.com'}>
              <EmailIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/yyounghoon" target="_blank">
              <LinkedInIcon />
            </Link>
            <Link href={'https://github.com/yoonyounghoon'} target="_blank">
              <GithubIcon />
            </Link>
          </div> */}
        </div>
      )}
    </nav>
  );
}

export default Header;
