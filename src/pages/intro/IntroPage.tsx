import Guide from '@/entities/admin/ui/Guide';
import Image from 'next/image';
import { mainSection } from './introPage.css';

function IntroPage() {
  return (
    <section className={mainSection}>
      <Guide
        title={'안녕하세요, 윤영훈입니다.'}
        description={[
          '웹 개발자로 일하고 있고, 기술적인 문제, 해결하기 위한 코드와 팀의 방향성을 고민합니다.',
          '상태 관리, 자동화, 디자인 패턴에 관심이 있습니다',
          '하이볼과 옷을 좋아합니다',
        ]}
      />
      <Image
        src={'/images/me.jpeg'}
        alt={'나의 모습'}
        width={820}
        height={800}
        layout={'responsive'}
      />
    </section>
  );
}
export default IntroPage;
