import { TPost } from '../../app/posts/page';
import Link from 'next/link';
import styled from '@emotion/styled';
import { palette } from '@/styles/palette';
import {
  dateStyle,
  descriptionStyle,
  titleStyle,
} from '@/styles/common.styles';

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
  border-radius: 12px;

  :hover {
    background: ${palette.lightGrey};
  }
`;

export const Title = styled.p`
  ${titleStyle}
  margin-bottom: 24px;
`;

export const Description = styled.p`
  ${descriptionStyle}
  margin-bottom: 12px;
`;

export const Date = styled.p`
  ${dateStyle}
`;
