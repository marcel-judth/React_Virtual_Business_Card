import { FaCheck } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import { activateAccount, deactivateSubscription } from '../../api';
import { userHasLicense } from '../../utils/license';

const StandardPlanCard = ({ setLoading }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const activeLicense =
    !userHasLicense('business') && userHasLicense('standard');

  const handleSubmit = () => {
    setLoading(true);

    if (userHasLicense('business')) deactivateSubscription(currentUser?.email);
    else activateAccount(currentUser?.username);
  };

  return (
    <section>
      <h2>Standard Account</h2>
      <div className='product'>
        <div className='price'>
          <h3>
            <span>0,00€</span>
          </h3>
          <h5>billed monthly</h5>
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
              <RiCloseFill className='icon-error' />
              Upload Images
            </p>
          </div>
          <div className='line'>
            <p>
              <RiCloseFill className='icon-error' />
              Edit all fields
            </p>
          </div>
          <div className='line'>
            <p>
              <RiCloseFill className='icon-error' />
              Upload companies
            </p>
          </div>
          <div className='line'>
            <p>
              <RiCloseFill className='icon-error' />
              Upload skills
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} method='POST'>
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
