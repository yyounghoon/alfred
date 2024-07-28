import { CONSTANTS } from '@/shared/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './index.module.scss';

type TProps = {
  title: keyof typeof CONSTANTS.CATEGORY;
  isMobile?: boolean;
};

function Category({ title, isMobile }: TProps) {
  const pathname = usePathname();

  const isActive = CONSTANTS.ROUTE_MAP[title] === pathname;
  const isDetailPage = title === 'Posts' && pathname?.includes('posts');

  return (
    <Link key={title} href={CONSTANTS.ROUTE_MAP[title]}>
      <div
        key={title}
        className={`${styles.category} ${isActive && styles.active} ${isMobile && styles.mobile} ${isDetailPage && styles.active}`}
      >
        {title}
      </div>
    </Link>
  );
}
export default Category;
