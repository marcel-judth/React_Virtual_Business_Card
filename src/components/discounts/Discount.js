import styled from 'styled-components';
import logo from '../../img/starbucks.png';
const Discount = (props) => {
  return (
    <DiscountWrapper>
      <img src={logo} alt='logo' />
      <div className='text'>
        <h5>-10% off</h5>
        <span>Starbucks</span>
      </div>
    </DiscountWrapper>
  );
};

const DiscountWrapper = styled.div`
  padding: 2rem;
  img {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

export default Discount;
