import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { Colors } from '../../../styles/Colors';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();

  return (
    <FaqWrapper>
      <h2>
        {t('home.faq.heading')}
        <span>{t('home.faq.heading2')}</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={t('home.faq.f1.heading')}>
          <div className='answer'>
            <p>{t('home.faq.f1.text1')}</p>
            <p>{t('home.faq.f1.text2')}</p>
          </div>
        </Toggle>
        <Toggle title={t('home.faq.f1.heading')}>
          <div className='answer'>
            <p>{t('home.faq.f1.text1')}</p>
            <p>{t('home.faq.f1.text2')}</p>
          </div>
        </Toggle>
        <Toggle title={t('home.faq.f1.heading')}>
          <div className='answer'>
            <p>{t('home.faq.f1.text1')}</p>
            <p>{t('home.faq.f1.text2')}</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FaqWrapper>
  );
};

const FaqWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10vh 10vw;
  color: white;
  @media (max-width: 1000px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  display: block;
  span {
    display: block;
    color: ${Colors.primaryColor};
  }
  h2 {
    padding-bottom: 2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 0.5rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1.5rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;
