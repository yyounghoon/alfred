import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { css } from '@emotion/react';
import { palette } from '@/styles/palette';

type TProps = {
  path: string;
  name: string;
};

function NavItem({ path, name }: TProps) {
  const pathname = usePathname();
  const isActive = pathname.includes(path);
  console.log('isActive', isActive);
  return (
    <div
      css={css`
        border-bottom: ${isActive && `1px solid ${palette.hover}`};
      `}
    >
      <Link key={path} href={path}>
        {name}
      </Link>
    </div>
  );
}
export default NavItem;
