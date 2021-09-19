import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import landing from '../../../img/landing.jpg';

const Landing = ({ theme, setTheme }) => {
  const [component, view] = useInView({ threshold: 0.3 });
  if (theme && theme.navWhiteColor === false && view)
    setTheme({ navWhiteColor: true });

  return (
    <LandingWrapper ref={component}>
      <img src={landing} alt='landing' />
      <div className='landing-text'>
        <h2>Digital Business Card</h2>
        <div className='separator'></div>
        <p>networking was never so easy</p>
      </div>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  position: relative;
  .landing-text {
    position: absolute;
    bottom: 12%;
    width: 100%;
    padding: 0 10vw;
    text-align: center;

    .separator {
      height: 0.2rem;
      width: 2rem;
      background: white;
      opacity: 0.8;
      margin: 0.5rem auto;
    }

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
    height: 100vh;
    width: 100%;
    max-width: 100vw;
    object-fit: cover;
  }
`;

export default Landing;
