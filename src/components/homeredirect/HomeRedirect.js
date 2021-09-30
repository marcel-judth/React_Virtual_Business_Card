import { useEffect } from 'react';

const HomeRedirect = (props) => {
  useEffect(() => {
    window.location.href = '/';
  }, []);
  return <></>;
};

export default HomeRedirect;
