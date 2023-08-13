import styled from '@emotion/styled';
import Image from 'next/image';
import profileImg from '../../public/images/me.jpeg';
import Guide from '@/components/@shared/Guide';

function IntroPage() {
  return (
    <>
      <MainSection>
        <Guide
          title={'안녕하세요, 윤영훈입니다.'}
          description={[
            '웹 개발자로 일하고 있고, 기술적인 문제, 해결하기 위한 코드와 팀의 방향성을 고민합니다.',
            '상태 관리, 자동화, 디자인 패턴에 관심이 있습니다',
            '하이볼과 옷을 좋아합니다',
          ]}
        />
        <Image
          src={profileImg}
          alt={'나의 모습'}
          width={820}
          height={800}
          layout={'responsive'}
        />
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
