import { container, descriptionStyle, titleStyle } from './index.css';

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
    <div className={container}>
      <p className={titleStyle}>{title}</p>
      <div className={descriptionStyle}>{description}</div>
    </div>
  );
}
export default Guide;
