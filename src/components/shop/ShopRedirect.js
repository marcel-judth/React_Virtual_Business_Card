import { useEffect } from 'react';

const ShopRedirect = () => {
  useEffect(() => {
    window.location.href = '/shop';
  }, []);
  return <></>;
};

export default ShopRedirect;
