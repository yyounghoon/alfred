import Banner from '@/entities/admin/ui/Banner';
import Guide from '@/entities/admin/ui/Guide';
import Image from 'next/image';

function Intro() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '820px',
        margin: '0 auto',
      }}
    >
      <Guide
        title={'안녕하세요, 윤영훈입니다.'}
        description={[
          '웹 개발자로 일하고 있고, 기술적인 문제를 해결하기 위한 코드와 팀의 방향성을 고민합니다. \n 상태 관리, 자동화, 디자인 패턴에 관심이 있습니다',
        ]}
      />
      <Banner />
      {/* <Image
        src={'/images/me.jpeg'}
        alt={'나의 모습'}
        width={820}
        height={800}
        layout={'responsive'}
      /> */}
    </section>
  );
}
export default Intro;
