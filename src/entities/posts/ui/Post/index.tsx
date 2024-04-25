import { TPost } from '../../../../../app/posts/page';
import Link from 'next/link';
import {
  container,
  dateStyle,
  descriptionStyle,
  titleStyle,
} from './index.css';

function Post({ title, date, description, slug }: TPost) {
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
export default Post;
