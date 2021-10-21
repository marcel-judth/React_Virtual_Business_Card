import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';
import Card from './Card';
import { useScroll } from '../../../hooks/useScroll';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const { t } = useTranslation();
  const [el, ctrl] = useScroll();
  const [el2, ctrl2] = useScroll();
  const [el3, ctrl3] = useScroll();
  const [el4, ctrl4] = useScroll();

  const cardVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: 'easeOut', duration: 35, delay: 0.75 },
    },
  };

  return (
    <DescriptionWrapper>
      <h2 className='mobile-header'>{t('home.description.heading')}</h2>
      <div className='card-wrapper'>
        <Card ref={el} variants={cardVariants} animate={ctrl}>
          <h3>{t('home.description.card1.heading')}</h3>
          <p>{t('home.description.card1.text')}</p>
        </Card>
        <Card ref={el2} variants={cardVariants} animate={ctrl2}>
          <h3>{t('home.description.card1.heading')}</h3>
          <p>{t('home.description.card1.text')}</p>
        </Card>
        <Card ref={el3} variants={cardVariants} animate={ctrl3}>
          <h3>{t('home.description.card1.heading')}</h3>
          <p>{t('home.description.card1.text')}</p>
        </Card>
        <Card ref={el4} variants={cardVariants} animate={ctrl4}>
          <h3>{t('home.description.card1.heading')}</h3>
          <p>{t('home.description.card1.text')}</p>
        </Card>
      </div>
    </DescriptionWrapper>
  );
};

const DescriptionWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
  background: ${Colors.primaryColor};
  display: grid;
  flex-direction: column;
  align-items: center;

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h2 {
    color: ${Colors.secondaryColor};
    text-align: center;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1300px) {
    .card-wrapper {
      display: grid;
      grid-template-columns: 35rem 35rem;
    }
  }
`;

export default Description;
