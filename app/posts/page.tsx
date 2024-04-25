import Guide from '@/entities/admin/ui/Guide';
import { getAllPosts } from '@/entities/posts/libs/post';
import Post from '@/entities/posts/ui/Post';

export type TPost = {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
};

// export const getStaticProps = () => {
//   return {
//     props: {
//       posts: getAllPosts(),
//     },
//   };
// };

function PostsPage({ posts = [] }: { posts: TPost[] }) {
  return (
    <>
      <Guide
        title={'경험과 생각을 기록합니다'}
        description={
          '주로 개발관련 글을 작성하지만 다른 글이 있을수도 있습니다.'
        }
      />
      {posts.map((post) => (
        <Post key={post.slug} {...post} />
      ))}
    </>
  );
}
export default PostsPage;
