import Link from 'next/link';
import styles from './index.module.scss';
import { TPost } from '../../../../../app/posts/page';

function PostCard({ title, date, description, slug }: TPost) {
  return (
    <Link href={`posts/${slug}`}>
      <div className={styles.container}>
        <p className={styles.titleStyle}>{title}</p>
        <p className={styles.descriptionStyle}>{description}</p>
        <p className={styles.dateStyle}>{date}</p>
      </div>
    </Link>
  );
}
export default PostCard;
