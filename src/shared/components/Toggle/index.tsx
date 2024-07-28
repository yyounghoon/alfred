import { useContext } from 'react';
import styles from './index.module.scss';
import { ThemeContext } from '@/app/ThemeProvider';

function Toggle() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.ball} data-darkMode={isDarkMode}></div>
    </div>
  );
}
export default Toggle;
