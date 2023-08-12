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
`;

const MainSection = styled.section`
  flex: 1;
  margin: auto;
  max-width: ;
`;
