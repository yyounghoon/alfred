import { CSSTransition } from 'react-transition-group';
import CloseIcon from '@/shared/components/Icon/CloseIcon';
import styles from './index.module.scss';
import { CONSTANTS } from '@/shared/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Category from '../Category';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';
import Toggle from '@/shared/components/Toggle';

const categoryList = Object.values(CONSTANTS.CATEGORY);

type TProps = {
  isOpen: boolean;
  handleDrawerToggle: () => void;
};

function DrawerMenu({ isOpen, handleDrawerToggle }: TProps) {
  const pathname = usePathname();
  const { isDarkMode } = useContext(ThemeContext);

  const handleClose = () => {
    handleDrawerToggle();
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles['container-enter'],
        enterActive: styles['container-enter-active'],
        exit: styles['container-exit'],
        exitActive: styles['container-exit-active'],
      }}
      unmountOnExit
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Category</h1>
          <div className={styles.right}>
            <Toggle />
            <button className={styles.closeBtn} onClick={handleClose}>
              <CloseIcon isDarkMode={isDarkMode} />
            </button>
          </div>
        </div>
        <div onClick={handleClose}>
          <ul className={styles.categoryList}>
            {categoryList.map((category) => (
              <Category key={category} title={category} isMobile />
            ))}
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
}
export default DrawerMenu;
