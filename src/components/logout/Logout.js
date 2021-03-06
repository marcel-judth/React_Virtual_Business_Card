import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
    history.push('/');
  }, [history]);

  return <></>;
}

export default Logout;
