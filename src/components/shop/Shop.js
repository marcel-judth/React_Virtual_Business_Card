import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import Footer from '../shared/Footer';

const Shop = (props) => {
  return (
    <>
      <ShopWrapper>
        <h2>
          Get Your Card <span>Now</span>
        </h2>
        <p>
          You can choose the color of your NFC card and personalize it with your
          name, or create your own personalized NFC card with your brand.
        </p>
        <div id='collection-component-1632069914946'></div>
      </ShopWrapper>
      <Footer />
    </>
  );
};

const ShopWrapper = styled.div`
  min-height: 100vh;
  padding: 15vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    max-width: 40rem;
    text-align: center;
    margin: 2rem 0rem;
    margin-top: 1rem;
  }

  span {
    color: ${Colors.primaryColor};
  }
`;

export default Shop;
