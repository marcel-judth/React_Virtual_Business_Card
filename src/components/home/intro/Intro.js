import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';
import video from '../../../video/mockup_video.mp4';
import videoMobile from '../../../video/mockup_video_mobile.mp4';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Intro = ({ theme, setTheme }) => {
  const { t } = useTranslation();
  const [component, view] = useInView({ threshold: 0.95 });
  useEffect(() => {
    if (theme && theme.navWhiteColor && view)
      setTheme({ navWhiteColor: false });
  }, [theme, setTheme, view]);

  return (
    <IntroWrapper ref={component}>
      <h2>{t('home.intro.heading')}</h2>
      <div className='separator'></div>
      <video
        className='video'
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload='none'
      />
      <video
        className='video-mobile'
        src={videoMobile}
        autoPlay
        muted
        loop
        playsInline
      />
    </IntroWrapper>
  );
};

const IntroWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ececec;

  video {
    max-width: 100vw;
    height: 80vh;
  }

  .video-mobile {
    display: none;
  }

  h2 {
    margin-top: 3rem;
    text-align: center;
  }

  .separator {
    height: 0.2rem;
    width: 2rem;
    background: ${Colors.primaryColor};
    opacity: 0.8;
    margin: 0.5rem auto;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    .video {
      display: none;
    }

    .video-mobile {
      display: block;
    }
  }
`;

export default Intro;
