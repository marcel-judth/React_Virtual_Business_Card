import { FaCheck } from 'react-icons/fa';
import { deactivateSubscription } from '../../../api';
import { userHasLicense } from '../../../utils/license';

const StandardPlanCard = ({ setLoading }) => {
  const currentUserEmail = JSON.parse(localStorage.getItem('user'))?.email;
  const activeLicense = !userHasLicense('business');

  function handleSubmit() {
    setLoading(true);
    deactivateSubscription(currentUserEmail);
  }

  return (
    <section>
      <h2>Standard Plan</h2>
      <div className='product'>
        <div>
          <h3>
            <span>48,99€</span>
          </h3>
          <h5>+0.99€ products</h5>
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
      <form onSubmit={handleSubmit}>
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

export default StandardPlanCard;
