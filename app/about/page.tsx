import Career from '@/entities/admin/ui/Career';
import styles from './index.module.scss';

type TCareerGroup = {
  groupName: string;
  desc: string;
};

export type TCareer = {
  logoUrl: string;
  companyName: string;
  totalDate: string;
  group: TCareerGroup | TCareerGroup[];
  homePage: string;
};

const CAREER_LIST: TCareer[] = [
  {
    logoUrl: '/assets/wemade.svg',
    companyName: '위메이드',
    totalDate: '2024.01 ~ 현재',
    group: [
      {
        groupName: '위믹스 체인센터',
        desc: 'TBU',
      },
      {
        groupName: 'DEX 개발그룹',
        desc: 'TBU',
      },
    ],
    homePage: 'https://wemade.com',
  },
  {
    logoUrl: '/assets/huray.jpg',
    companyName: '휴레이 포지티브',
    totalDate: '2021.10 ~ 2023.12',
    group: [
      {
        groupName: '프론트엔드팀',
        desc: 'TBU',
      },
    ],
    homePage: 'https://www.huray.net',
  },
];

function AboutPage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>블로그 주인 소개</h1>
        <div className={styles.introduce}>
          <div className={styles.my}>
            <h2 className={styles.name}>윤영훈</h2>
            <p className={styles.desc}>
              웹 생태계의 전반적인 이해와 많은 경험을 위해 노력하고 있습니다.
            </p>
          </div>
          <div className={styles.photo}>
            <img src={'/images/my.jpeg'} alt="my-photo" />
          </div>
        </div>
        {CAREER_LIST.map((career) => (
          <Career key={career.companyName} career={career} />
        ))}
      </div>
    </>
  );
}
export default AboutPage;
