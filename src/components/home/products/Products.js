import { useEffect } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styles/Colors';

function Products() {
  useEffect(() => {
    // const element = document.getElementById(
    //   'collection-component-1628940789227'
    // );
    // console.log('elemnt:');
    // console.log(element);
    // document.getElementById('products').innerHTML = element.innerHTML;
  }, []);

  return (
    <ProductsWrapper>
      <h2>
        Get Your Card <span>Now</span>
      </h2>
      <p>
        You can choose the color of your NFC card and personalize it with your
        name, or create your own personalized NFC card with your brand.
      </p>
      <div id='collection-component-1628940789227'></div>
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
    margin-top: 1rem;
  }

  span {
    color: ${Colors.primaryColor};
  }
`;

export default Products;
