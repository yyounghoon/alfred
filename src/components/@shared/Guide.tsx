import styled from '@emotion/styled';

type TProps = {
  title: string;
  description: string;
};

function Guide({ title, description }: TProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
export default Guide;

const Container = styled.div`
  display: flex;
  max-width: 820px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin: 80px 0;
`;

const Title = styled.p`
  color: #7c7c7c;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Description = styled.p`
  color: #7c7c7c;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 24px */
`;
