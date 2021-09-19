import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { finalizePlanCheckout } from '../../api';
import { API_BaseURL } from '../../utils/constants';
import Loading from '../shared/Loading';
import { FaCheck } from 'react-icons/fa';

const ProductDisplay = (props) => {
  const currentUserEmail = JSON.parse(localStorage.getItem('user'))?.email;

  return (
    <section>
      <h2>Basic Plan</h2>
      <div className='product'>
        <div>
          <h3>
            <span>1.99€</span> / month
          </h3>
          <h5>+49.99€ activation fee</h5>
        </div>
        <div className='description'>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              No app required!
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Reduce Costs
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Reach more people
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              unlimited scans
            </p>
          </div>
        </div>
      </div>
      <form
        action={
          API_BaseURL +
          '/stripe/create-plan-checkout-session/' +
          currentUserEmail
        }
        method='POST'
      >
        <button className='checkout-button' type='submit'>
          Select
        </button>
      </form>
    </section>
  );
};

const ComingSoon = (props) => {
  return (
    <section>
      <h2>Business Plan</h2>
      <div className='product'>
        <div>
          <h3>
            <span>tba</span> / month
          </h3>
          <h5>+ activation fee</h5>
        </div>
        <div className='description'>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              No app required!
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Reduce Costs
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Reach more people
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              unlimited scans
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              see employees data
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              get company benefits
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              custom branding
            </p>
          </div>
        </div>
      </div>
      <form method='POST'>
        <button className='checkout-button coming-soon-btn' type='submit'>
          Coming Soon
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function PlanCheckout() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem('user'));
      finalizePlanCheckout(user?.email, user?.username);
    }

    if (query.get('canceled')) {
      setMessage('Order canceled -- please checkout again');
    }
  }, []);

  return (
    <PlanCheckoutWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          {message ? (
            <Message message={message} />
          ) : (
            <>
              <h2 className='title'>Select your Plan</h2>
              <div className='product-wrapper'>
                <ProductDisplay />
                <ComingSoon />
              </div>
            </>
          )}
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
  background: #242d60;
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
      margin-bottom: 0.5rem;
      text-align: center;
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
        color: #0c9807;
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
    margin-bottom: 4rem;
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
  .checkout-button:hover {
    opacity: 0.8;
  }
  .coming-soon-btn {
    background: grey;
  }
`;
