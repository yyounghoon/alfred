'use client';

import { dateStyle, descriptionStyle, titleStyle } from '@/styles/common.css';
import { palette } from '@/styles/palette';
import styled from '@emotion/styled';

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
    <Container>
      <Guide>
        <p className={titleStyle}>{title}</p>
        <p className={descriptionStyle}>{description}</p>
        <p className={dateStyle}>{date}</p>
      </Guide>
      <Article dangerouslySetInnerHTML={{ __html: convertHtmlString }} />
    </Container>
  );
}
export default PostDetail;

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
