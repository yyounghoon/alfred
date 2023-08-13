import styled from '@emotion/styled';
import { palette } from '@/styles/palette';

type TProps = {
  title: string;
  description: string | string[];
};

function Guide({ title, description }: TProps) {
  const descriptionText =
    typeof description === 'string'
      ? description
      : description.map((description, index) => (
          <p key={index}>{description}</p>
        ));

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{descriptionText}</Description>
    </Container>
  );
}
export default Guide;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  margin: 80px 0;
  border: 1px solid ${palette.lightGrey};
  border-radius: 12px;
`;

const Title = styled.p`
  color: #7c7c7c;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Description = styled.div`
  color: #7c7c7c;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;
