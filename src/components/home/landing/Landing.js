import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import phone from '../../../img/iphone_landing.jpg';
import { Colors } from '../../../styles/Colors';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Landing = ({ theme, setTheme }) => {
  const { t } = useTranslation();
  const [component, view] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (theme && theme.navWhiteColor === false && view)
      setTheme({ navWhiteColor: true });
  }, [setTheme, theme, view]);

  return (
    <LandingWrapper ref={component}>
      <img src={phone} alt='x-act.me iphone-Mockups' />
      <div className='landing-text'>
        <Hide>
          <h2>{t('home.landing.heading')}</h2>
        </Hide>
        <Separator></Separator>
        <Hide>
          <p>{t('home.landing.subHeading')}</p>
        </Hide>
      </div>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  position: relative;
  height: 100vh;
  max-width: 100vw;
  background: ${Colors.primaryColor};
  overflow: hidden;
  animation: 0.75s ease-out 0s 1 slideInFromLeft;

  .landing-text {
    position: absolute;
    bottom: 15%;
    width: 100%;
    padding: 0 10vw;
    text-align: center;

    h2 {
      color: white;
      opacity: 0;
      animation: 0.5s ease-in-out 1s 1 fadeIn forwards;
    }

    p {
      color: white;
      font-weight: 300;
      font-size: 0.9rem;
      opacity: 0;
      animation: 0.5s ease-in-out 1.25s 1 fadeIn forwards;
    }
  }

  img {
    max-height: 60vh;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 12vh;
    max-width: 150vw;
    opacity: 0;
    animation: 0.5s ease-out 0.75s 1 fadeIn forwards;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Separator = styled.div`
  height: 0.2rem;
  width: 2rem;
  background: white;
  opacity: 0.8;
  margin: 0.5rem auto;
  opacity: 0;
  animation: 0.5s ease-in-out 1.25s 1 fadeIn forwards;
`;

export default Landing;
