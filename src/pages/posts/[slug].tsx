import { getAllPosts, getPostBySlug } from '@/libs/post';
import markdownToHtml from '@/libs/markdownToHtml';
import { Date, Description, Title } from '@/styles/common.styles';
import styled from '@emotion/styled';

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const convertHtmlString = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content: convertHtmlString,
      },
    },
  };
}

export type TPost = {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
};

function PostPage({ post }: { post: TPost }) {
  const { title, description, date, content } = post;
  return (
    <Container>
      <Guide>
        <Title style={{ marginTop: '120px' }}>{title}</Title>
        <Description>{description}</Description>
        <Date>{date}</Date>
      </Guide>
      <Article dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}
export default PostPage;

const Container = styled.div`
  max-width: 820px;
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 12px;
  margin-top: 120px;
  margin-bottom: 60px;
`;

const Article = styled.article`
  font-size: 18px;
  line-height: 1.625;

  p,
  ul,
  ol,
  blockquote {
    margin: 24px 0;
  }

  h2 {
    font-size: 30px;
    line-height: 1.375;
    margin: 48px 0 16px 0;
  }

  h3 {
    font-size: 24px;
    line-height: 1.375;
    margin: 32px 0 16px 0;
  }
`;
