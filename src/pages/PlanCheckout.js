import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { finalizePlanCheckout } from '../api';
import Loading from '../components/shared/Loading';
import { Colors } from '../styles/Colors';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import StandardPlanCard from '../components/planCheckout/StandardPlanCard';
import BusinessPlanCard from '../components/planCheckout/BusinessPlanCard';

export default function PlanCheckout() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));
      finalizePlanCheckout(user?.email, user?.username);
    }

    if (query.get('canceled')) {
      window.location.href = '/logout';
    }
  }, []);

  return (
    <PlanCheckoutWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className='title'>Select your Account</h2>

          <HashLink to='/ComparePlans'>
            <button className='compare-button'>Compare Plans</button>
          </HashLink>

          <div className='product-wrapper'>
            <StandardPlanCard setLoading={setLoading} />
            <BusinessPlanCard />
          </div>
          <HashLink to='/logout'>
            <AiOutlineArrowLeft /> Cancel
          </HashLink>
          <br></br>
          <br></br>
        </>
      )}
    </PlanCheckoutWrapper>
  );
}

const PlanCheckoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${Colors.primaryColor};
  padding-top: 20vh;
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

  a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    svg {
      margin-right: 0.2rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .product-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      margin-top: 2rem;
      text-align: center;
      margin-bottom: 0.2rem;
      span {
        font-size: 2rem;
      }
    }
  }

  .description {
    margin: 1.5rem 0rem;
    .line {
      display: flex;
      justify-content: start;
      align-items: flex-start;
      .icon {
        margin-right: 0.5rem;
        margin-left: 0.3rem;
        color: #0c9807;
      }
      .icon-error {
        color: ${Colors.errorColor};
        font-size: 1.5rem;
      }
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
    margin-bottom: 1rem;
  }

  h2 {
    font-style: normal;
    font-size: 24px;
    text-align: center;
  }

  h3,
  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.154px;
    color: #242d60;
    margin: 0;
  }
  h5 {
    opacity: 0.5;
    font-size: 1rem;
    text-align: center;
  }

  .compare-button {
    height: 36px;
    min-height: 36px;
    background: ${Colors.secondaryColor};
    color: ${Colors.primaryColor};
    width: 10rem;
    font-size: 14px;
    border: 0;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.6;
    border-radius: 6px 6px 6px 6px;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    margin-bottom: 1rem;
  }
  .compare-button:hover {
    opacity: 0.8;
  }

  .checkout-button {
    height: 36px;
    background: #556cd6;
    color: white;
    width: 100%;
    font-size: 14px;
    border: 0;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.6;
    border-radius: 0 0 6px 6px;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  }

  .checkout-button:disabled {
    background: grey;
  }

  .checkout-button:hover {
    opacity: 0.8;
  }

  .coming-soon-btn {
    background: grey;
  }
`;
