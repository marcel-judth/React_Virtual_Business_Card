import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';
import CustomButton from '../../shared/CustomButton';

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
      <CustomButton>Join x-ACT.me</CustomButton>

      <br />
      <br />
      <br />
      <br />

      <h2 className='mobile-header'>Why should you choose X-Act.me?</h2>

      <div className='card'>
        <div className='dot'></div>
        <p>Easy to use</p>
      </div>
      <div className='card'>
        <div className='dot'></div>
        <p>No app requierd</p>
      </div>
      <div className='card'>
        <div className='dot'></div>
        <p>Reduce costs</p>
      </div>
      <div className='card'>
        <div className='dot'></div>
        <p>Share your data fast</p>
      </div>
    </About>
  );
}

const About = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 10vh 10vw;

  .card {
    min-height: 3rem;
    width: 100%;
    max-width: 50rem;
    padding: 0rem 1.5rem;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    margin-top: 1rem;
    -webkit-box-shadow: 5px 11px 40px -19px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 11px 40px -19px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 11px 40px -19px rgba(0, 0, 0, 0.75);
  }

  .dot {
    background: ${Colors.primaryColor};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

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
