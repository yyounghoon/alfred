import styled from '@emotion/styled';
import Link from 'next/link';

function Header() {
  return (
    <Nav>
      <Title>youn younghoon</Title>
      <Menu>
        <Link href={'/posts'}>geul</Link>
        <Link href={'/photos'}>sajin</Link>
        <Link href={'/about'}>sogae</Link>
      </Menu>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
`;

const Title = styled.p`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  a {
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.44px;
    text-decoration: none;
  }
`;
