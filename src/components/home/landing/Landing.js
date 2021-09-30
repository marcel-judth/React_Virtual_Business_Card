import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import phone from '../../../img/iphone_landing.jpg';
import { Colors } from '../../../styles/Colors';
import { motion } from 'framer-motion';

const Landing = ({ theme, setTheme }) => {
  const pageAnimation = {
    hidden: {
      x: '-100%',
    },
    show: {
      x: 0,
      transition: {
        duration: 1,
        when: 'beforeChildren',
      },
    },
  };
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  const [component, view] = useInView({ threshold: 0.4 });
  if (theme && theme.navWhiteColor === false && view)
    setTheme({ navWhiteColor: true });

  return (
    <LandingWrapper
      ref={component}
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <motion.img
        variants={variants}
        src={phone}
        alt='x-act.me iphone-Mockups'
      />
      <motion.div className='landing-text'>
        <Hide>
          <motion.h2 variants={variants}>Digital Business Card</motion.h2>
        </Hide>
        <Separator variants={variants}></Separator>
        <Hide>
          <motion.p variants={variants}>
            networking was never that easy
          </motion.p>
        </Hide>
      </motion.div>
    </LandingWrapper>
  );
};

const LandingWrapper = styled(motion.div)`
  position: relative;
  height: 100vh;
  max-width: 100vw;
  background: ${Colors.primaryColor};
  overflow: hidden;
  .landing-text {
    position: absolute;
    bottom: 12%;
    width: 100%;
    padding: 0 10vw;
    text-align: center;

    h2 {
      color: white;
    }

    p {
      color: white;
      font-weight: 300;
      font-size: 0.9rem;
    }
  }

  img {
    max-height: 60vh;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 15vh;
    max-width: 150vw;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Separator = styled(motion.div)`
  height: 0.2rem;
  width: 2rem;
  background: white;
  opacity: 0.8;
  margin: 0.5rem auto;
`;

export default Landing;
