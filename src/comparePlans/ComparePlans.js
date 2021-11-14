import styled from 'styled-components';
import { Colors } from '../styles/Colors';
import businessaccount from '../img/comparePlans/businessaccount.jpg';
import standardaccount from '../img/comparePlans/standardaccount.jpg';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function ComparePlans() {
  const [image1, setImage1] = useState(false);

  setTimeout(() => {
    setImage1(!image1);
  }, 1500);

  return (
    <ComparePlansWrapper>
      <h2 className='title'>
        {image1 ? 'Business Account' : 'Standard Account'}
      </h2>

      <img
        src={image1 ? businessaccount : standardaccount}
        alt='x-ACT.me account comparisson'
      />

      <HashLink to='/plancheckout'>
        <AiOutlineArrowLeft /> Back
      </HashLink>
    </ComparePlansWrapper>
  );
}

const ComparePlansWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${Colors.primaryColor};
  padding-top: 15vh;
  height: 100%;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Helvetica Neue', 'Ubuntu', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  section {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 350px;
    max-width: 90vw;
    border-radius: 6px;
    justify-content: space-between;
    padding-top: 1rem;
    margin: 0rem 1rem;
    margin-bottom: 2rem;
  }

  img {
    width: auto;
    max-width: 100vw;
    height: 70vh;
    object-fit: cover;
    transition: 0.5s ease;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 0.2rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.154px;
    color: #242d60;
    height: 100%;
    padding: 2px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .title {
    color: white;
    font-weight: 600;
    font-size: 2rem;
  }

  h2 {
    font-style: normal;
    font-size: 24px;
    text-align: center;
  }
`;
