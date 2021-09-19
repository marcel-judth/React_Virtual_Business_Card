import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

import video from '../../../video/mockup_video.mp4';
import videoMobile from '../../../video/mockup_video_mobile.mp4';

const Intro = ({ theme, setTheme }) => {
  const [component, view] = useInView({ threshold: 0.9 });
  if (theme && theme.navWhiteColor && view) setTheme({ navWhiteColor: false });

  return (
    <IntroWrapper ref={component}>
      <h2>As easy as it could get!</h2>
      <div className='separator'></div>
      <video className='video' src={video} autoPlay muted loop />
      <video className='video-mobile' src={videoMobile} autoPlay muted loop />
    </IntroWrapper>
  );
};

const IntroWrapper = styled.div`
  width: 100vw;
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
