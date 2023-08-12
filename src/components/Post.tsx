import { TPost } from '@/pages/posts';
import Link from 'next/link';
import { Date, Description, Title } from '@/styles/common.styles';
import styled from '@emotion/styled';

function Post({ title, date, description, slug }: TPost) {
  return (
    <Link href={`posts/${slug}`}>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Date>{date}</Date>
      </Container>
    </Link>
  );
}
export default Post;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 165px;
  padding: 32px 24px;
  gap: 12px;
`;
