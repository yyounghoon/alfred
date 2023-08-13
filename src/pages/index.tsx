import styled from '@emotion/styled';

function IntroPage() {
  return (
    <>
      <MainSection>
        <div>인트로 페이지입니다.</div>
      </MainSection>
    </>
  );
}
export default IntroPage;

const MainSection = styled.section`
  display: flex;
  max-width: 820px;
  flex-direction: column;
  margin: 0 auto;
`;
