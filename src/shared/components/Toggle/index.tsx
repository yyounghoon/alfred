import { useContext } from 'react';
import styles from './index.module.scss';
import { ThemeContext } from '@/app/ThemeProvider';

function Toggle() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      data-dark-mode={isDarkMode}
      onClick={toggleDarkMode}
    >
      <div className={styles.ball} data-dark-mode={isDarkMode}></div>
    </div>
  );
}
export default Toggle;
