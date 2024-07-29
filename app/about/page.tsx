'use client';

import Career from '@/entities/admin/ui/Career';
import styles from './index.module.scss';
import Link from 'next/link';
import EmailIcon from '@/shared/components/Icon/EmailIcon';
import LinkedInIcon from '@/shared/components/Icon/LinkedInIcon';
import GithubIcon from '@/shared/components/Icon/GithubIcon';
import { useContext } from 'react';
import { ThemeContext } from '@/app/ThemeProvider';
import DarkEmailIcon from '@/shared/components/Icon/DarkEmailIcon';
import DarkLinkedInIcon from '@/shared/components/Icon/DarkLinkedInIcon';
import DarkGithubIcon from '@/shared/components/Icon/DarkGithubIcon';

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
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>블로그 주인 소개</h1>
        <div className={styles.introduce}>
          <div className={styles.photo}>
            <img src={'/images/my.jpeg'} alt="my-photo" />
          </div>
          <div className={styles.my}>
            <h2 className={styles.name}>윤영훈</h2>
            <p className={styles.desc}>
              웹 생태계의 전반적인 이해와 많은 경험을 위해 노력하고 있습니다.
            </p>
            <div className={styles.contactList}>
              <Link href={'mailto:younghoondev@gmail.com'}>
                {isDarkMode ? <DarkEmailIcon /> : <EmailIcon />}
                <span>Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/yyounghoon"
                target="_blank"
              >
                {isDarkMode ? <DarkLinkedInIcon /> : <LinkedInIcon />}
                <span>LinkedIn</span>
              </Link>
              <Link href={'https://github.com/yoonyounghoon'} target="_blank">
                {isDarkMode ? <DarkGithubIcon /> : <GithubIcon />}
                <span>Github</span>
              </Link>
            </div>
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
