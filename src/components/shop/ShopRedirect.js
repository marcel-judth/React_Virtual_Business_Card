import { useEffect } from 'react';

const ShopRedirect = () => {
  useEffect(() => {
    window.location.href = '/shop';
  }, []);
  return <h2>loading...</h2>;
};

export default ShopRedirect;
