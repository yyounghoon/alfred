import Header from '@/components/@shared/Header';
import styled from '@emotion/styled';

type TProps = {
  children: React.ReactNode;
};

function Layout({ children }: TProps) {
  return (
    <Container>
      <Header />
      <MainSection>{children}</MainSection>
    </Container>
  );
}
export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainSection = styled.section`
  flex: 1;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 24px;
`;
