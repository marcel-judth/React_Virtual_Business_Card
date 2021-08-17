import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { Colors } from '../../../styles/Colors';

const Faq = () => {
  return (
    <FaqWrapper>
      <h2>
        Any Questions ? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              autem accusamus ex laboriosam porro, adipisci quam voluptatum
              magnam placeat corporis.
            </p>
          </div>
        </Toggle>
        <Toggle title='How can I edit my data?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
              totam.
            </p>
          </div>
        </Toggle>
        <Toggle title='Do I need any app?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, neque.
            </p>
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
