import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import ScrollTop from './ScrollTop';

function Loading() {
  return (
    <LoadingWrapper>
      <LodingElemant
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />
      <ScrollTop />
    </LoadingWrapper>
  );
}

const LodingElemant = styled(motion.div)`
  background: ${Colors.primaryColor};
  border-radius: 30px;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-top: 40vh;
`;

const LoadingWrapper = styled.div`
  height: 50vh;
  width: 100%;
  max-width: 100vw;
`;

export default Loading;
