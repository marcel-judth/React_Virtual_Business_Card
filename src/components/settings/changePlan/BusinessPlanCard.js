import { FaCheck } from 'react-icons/fa';
import { API_BaseURL } from '../../../utils/constants';
import { userHasLicense } from '../../../utils/license';

const BusinessPlanCard = () => {
  const currentUserEmail = JSON.parse(localStorage.getItem('user'))?.email;
  const activeLicense = userHasLicense('business');

  return (
    <section>
      <h2>Business Plan</h2>
      <div className='product'>
        <div>
          <h3>
            <span>48.99€</span>
          </h3>
          <h5>+0.99€ / month</h5>
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
          currentUserEmail +
          '/1'
        }
        method='POST'
      >
        <button
          className='checkout-button'
          type='submit'
          disabled={activeLicense ? 'disabled' : ''}
        >
          {activeLicense ? 'current' : 'select'}
        </button>
      </form>
    </section>
  );
};

export default BusinessPlanCard;
