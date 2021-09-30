import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import { HashLink as Link } from 'react-router-hash-link';

function Aboutus() {
  return (
    <About>
      <h2 className='mobile-header'>What is X-Act.me?</h2>
      <p>
        We offer digital business cards which you can access via our custom
        products. Your customers or contact can easily access your virtual
        business card to download it on their own mobile device. And the best of
        all: No app is requierd!
      </p>
      <br />
      <br />
      <Link to='/register'>
        <CustomButton>Join the Community</CustomButton>
      </Link>
    </About>
  );
}

const About = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 10vh 10vw;

  p {
    text-align: center;
  }

  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export default Aboutus;
