import { useEffect } from 'react';

const HomeRedirect = (props) => {
  useEffect(() => {
    window.location.href = '/';
  }, []);
  return <h2>loading...</h2>;
};

export default HomeRedirect;
