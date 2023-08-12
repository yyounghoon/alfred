import Header from '@/components/@shared/Header';
import Guide from '@/components/@shared/Guide';
import styled from '@emotion/styled';
import ListItem from '@/components/Post';
import * as matter from 'gray-matter';

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
