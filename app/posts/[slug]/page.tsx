import { getPostBySlug } from '@/entities/posts/libs/post';
import markdownToHtml from '@/entities/posts/libs/markdownToHtml';
import PostDetail from '@/entities/posts/ui/PostDetail';

export type TPost = {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
};

async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = getPostBySlug(slug);
  const convertHtmlString = await markdownToHtml(post.content || '');
  return <PostDetail post={post} convertHtmlString={convertHtmlString} />;
}
export default PostPage;
