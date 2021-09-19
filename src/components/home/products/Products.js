import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

function Products() {
  return (
    <ProductsWrapper>
      <h2>Our Products</h2>
      <p>
        Choose one of our products and get started with <span>x-ACT.me.</span>
      </p>
      <div id='collection-component-1632069914946'></div>
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  min-height: 100vh;
  padding: 10vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    max-width: 40rem;
    text-align: center;
    margin: 2rem 0rem;
    margin-top: 1.5rem;
  }

  span {
    color: ${Colors.primaryColor};
    font-weight: 600;
  }
`;

export default Products;
