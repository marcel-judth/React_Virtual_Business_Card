import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

const Card = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  });

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <CardWrapper
      ref={ref}
      initial='hidden'
      variants={cardVariants}
      animate={controls}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  padding: 2rem;
  background: white;
  width: 30rem;
  max-width: 95vw;
  margin: 2rem;
  border-radius: 1rem;
  cursor: pointer;

  h3 {
    font-weight: 500;
    color: ${Colors.primaryColor};
    margin-bottom: 1rem;
  }

  @media (max-width: 800px) {
    margin: 1rem 0rem;
  }
`;

export default Card;
