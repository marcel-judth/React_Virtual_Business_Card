import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import AboutUsSVG from './AboutUsSVG';

function Aboutus() {
  const { t } = useTranslation();

  return (
    <About>
      <AboutUsSVG />
      <div>
        <h2 className='mobile-header'>{t('home.aboutus.heading')}</h2>
        <p>{t('home.aboutus.text')}</p>
        <br />
        <br />
        <Link className='btn-about' to='/register'>
          <CustomButton>{t('home.aboutus.joinBTN')}</CustomButton>
        </Link>
      </div>
    </About>
  );
}

const About = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 10vh 10vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  svg {
    width: 30vw;
  }

  p {
    max-width: 40rem;
    margin: 0 auto;
  }

  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1280px) {
    display: block;

    svg {
      height: auto;
      width: 40vw;
      margin: 5vh auto;
      display: block;
    }

    p,
    h2 {
      text-align: center;
    }

    .btn-about {
      display: block;
      width: 10rem;
      margin: 0 auto;
    }
  }
`;

export default Aboutus;
