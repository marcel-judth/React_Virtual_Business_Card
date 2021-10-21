import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

function Products() {
  const { t } = useTranslation();

  return (
    <ProductsWrapper>
      <h2>{t('home.products.heading')}</h2>
      <p>{t('home.products.text')}</p>
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
