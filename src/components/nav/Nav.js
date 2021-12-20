//styles
import styled from 'styled-components';
//images
import logoPrimary from '../../img/x-act.me-alt.png';
//router
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
  return (
    <StyledNav>
      <Link to='/home'>
        <div className='nav-logo'>
          <img src={logoPrimary} alt='logo x-act.me' />
        </div>
      </Link>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  max-width: 100vw;
  height: 5vh;
  min-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;
  padding-top: 2vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;

  .nav-logo {
    width: fit-content;
    margin: 0 auto;
    img {
      height: 6vh;
      width: auto;
      margin-left: 25px;
    }
  }
`;

export default Nav;
