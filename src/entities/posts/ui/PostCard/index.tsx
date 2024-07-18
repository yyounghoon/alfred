import Link from 'next/link';
import {
  container,
  dateStyle,
  descriptionStyle,
  titleStyle,
} from './index.css';
import { TPost } from '../../../../../app/posts/page';

function PostCard({ title, date, description, slug }: TPost) {
  return (
    <Link href={`posts/${slug}`}>
      <div className={container}>
        <p className={titleStyle}>{title}</p>
        <p className={descriptionStyle}>{description}</p>
        <p className={dateStyle}>{date}</p>
      </div>
    </Link>
  );
}
export default PostCard;
