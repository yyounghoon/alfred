import { menu, menuItem, nav, title } from './index.css';
import Link from 'next/link';

const menuMap = {
  posts: '글',
  photos: '사진',
  about: '소개',
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
          <div key={name} className={menuItem}>
            {name}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Header;
