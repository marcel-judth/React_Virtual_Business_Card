import styled from 'styled-components';
import Discount from './Discount';

const Discounts = (props) => {
  return (
    <DiscountsWrapper>
      <h2>Your Discounts</h2>
      <Discount />
    </DiscountsWrapper>
  );
};

const DiscountsWrapper = styled.div`
  padding-top: 15vh;
  padding-left: 10vw;
`;

export default Discounts;
