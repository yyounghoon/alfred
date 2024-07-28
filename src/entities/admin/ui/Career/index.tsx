import Image from 'next/image';
import styles from './index.module.scss';
import { TCareer } from '../../../../../app/about/page';

type TProps = {
  career: TCareer;
};

function Career({ career }: TProps) {
  const { logoUrl, companyName, totalDate, group } = career;

  return (
    <div className={styles.container}>
      <div className={styles.company}>
        {/* <div className={styles.logo}>
          <img src={logoUrl} alt="company-logo" />
        </div> */}
        <div className={styles.title}>
          <h1 className={styles.name}>{companyName}</h1>
          <span className={styles.date}>{totalDate}</span>
        </div>
      </div>
      {group instanceof Array ? (
        group.map((group) => (
          <div key={group.groupName} className={styles.descBox}>
            <h2 className={styles.groupName}>{group.groupName}</h2>
            <p className={styles.desc}>{group.desc}</p>
          </div>
        ))
      ) : (
        <div className={styles.descBox}>
          <h2 className={styles.groupName}>{group.groupName}</h2>
          <p className={styles.desc}>{group.desc}</p>
        </div>
      )}
    </div>
  );
}
export default Career;
