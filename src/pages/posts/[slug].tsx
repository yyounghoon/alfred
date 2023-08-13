import { getAllPosts, getPostBySlug } from '@/libs/post';
import markdownToHtml from '@/libs/markdownToHtml';
import {
  dateStyle,
  descriptionStyle,
  titleStyle,
} from '@/styles/common.styles';
import styled from '@emotion/styled';
import { palette } from '@/styles/palette';

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
        <p css={titleStyle}>{title}</p>
        <p css={descriptionStyle}>{description}</p>
        <p css={dateStyle}>{date}</p>
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
  margin-bottom: 60px;
`;

const Article = styled.article`
  font-size: 18px;
  line-height: 1.625;

  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  p,
  ul,
  ol,
  blockquote {
    margin: 24px 0;
  }

  b,
  strong {
    font-weight: bolder;
  }

  h1 {
    font-size: 32px;
    margin: 48px 0 16px 0;
  }

  h2 {
    font-size: 30px;
    margin: 48px 0 16px 0;
  }

  h3 {
    font-size: 24px;
    margin: 32px 0 16px 0;
  }

  img {
    display: inline-block;
    width: 100%;
    max-height: 550px;
  }

  blockquote {
    padding: 0 16px;
    color: #6a737d;
    border-left: 0.25em solid ${palette.blockquote};
  }
`;
