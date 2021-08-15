import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CustomButton from '../../shared/CustomButton';
import iphone from '../../../img/iPhoneMockup.jpg';

function Aboutus() {
  return (
    <About>
      <h2 className='mobile-header'>What is X-Act.me</h2>
      <img src={iphone} alt='x-act.met iphone mockup' />
      <Heading>
        <h2>What is X-Act.me</h2>
        <p>
          Lorem ipsum door sit amet, consectetur adip corporis doloribus o d io
          magni quo eos dolo res omnis incidunt vitae praesentium! Ipsum he
          Lorem ipsum door sit amet, consectetur adip corporis doloribus o d io
          magni quo eos dolo res omnis incidunt vitae praesentium! Ipsum he
        </p>
        <p>
          Lorem ipsum door sit amet, consectetur adip corporis doloribus o d io
          magni quo eos dolo res omnis incidunt vitae praesentium! Ipsum he
          Lorem ipsum door sit amet, consectetur adip corporis doloribus o d io
          magni quo eos dolo res omnis incidunt vitae praesentium! Ipsum he
        </p>
        <div className='btn-wrapper'>
          <Link to='/register'>
            <CustomButton>Get Your Card</CustomButton>
          </Link>
        </div>
      </Heading>
    </About>
  );
}

const Heading = styled.div`
  position: absolute;
  width: 40%;
  bottom: 50%;
  right: 10%;
  transform: translateY(50%);

  h2 {
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
  }

  p {
    margin-top: 1rem;
    max-width: 40vw;
  }

  button {
    margin-top: 2.5rem;
  }

  @media (max-width: 1000px) {
    position: relative;
    transform: none;
    width: 90%;
    bottom: 0%;
    right: 0%;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;

    button {
      width: fit-content;
    }

    p {
      max-width: 100%;
    }
    h2 {
      display: none;
    }
  }
`;

const About = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 10vh 10vw;
  img {
    max-width: 40vw;
    height: 80vh;
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
  }

  .mobile-header {
    display: none;
  }

  @media (max-width: 1000px) {
    img {
      position: relative;
      height: 20rem;
      max-width: 90%;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      display: block;
      transform: none;
      left: 0;
      top: 0;
    }

    .mobile-header {
      display: block;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
`;

export default Aboutus;
