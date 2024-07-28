import styles from './index.module.scss';

export type TPost = {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
};

function PostDetail({
  post,
  convertHtmlString,
}: {
  post: TPost;
  convertHtmlString: string;
}) {
  const { title, description, date, content } = post;

  return (
    <div className={styles.container}>
      <div className={styles.guide}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div
        className={styles.article}
        dangerouslySetInnerHTML={{ __html: convertHtmlString }}
      />
    </div>
  );
}
export default PostDetail;
