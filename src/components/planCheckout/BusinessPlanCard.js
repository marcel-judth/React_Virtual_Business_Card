import { FaCheck } from 'react-icons/fa';
import { API_BaseURL } from '../../utils/constants';
import { userHasLicense } from '../../utils/license';

const BusinessPlanCard = () => {
  const currentUserEmail = JSON.parse(localStorage.getItem('user'))?.email;
  const activeLicense = userHasLicense('business');

  return (
    <section>
      <h2>Business Account</h2>
      <div className='product'>
        <div className='price'>
          <h3>
            <span>0.99€</span>
          </h3>
          <h5> billed monthly</h5>
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
              Download Contact Card
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Visible in Networking Portal
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
              Upload Images
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Edit all fields
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Upload companies
            </p>
          </div>
          <div className='line'>
            <p>
              <FaCheck className='icon' />
              Upload skills
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
