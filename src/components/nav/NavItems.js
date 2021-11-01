import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

const NavItem = ({
  setNavStatus,
  navStatus,
  Icon,
  text,
  pathname,
  link,
  children,
}) => {
  const location = useLocation();

  return (
    <NavItemWrapper>
      <motion.li onClick={() => setNavStatus(!navStatus)}>
        <Link
          className={
            'nav-link ' + (location.pathname === pathname ? 'active' : '')
          }
          to={link}
        >
          {Icon}
          {text}
        </Link>
        {children}
      </motion.li>
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.div`
  position: relative;

  .nav-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    svg {
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
  }

  a {
    color: white;
    font-weight: 400;
    text-decoration: none;
  }

  .nav-link.active {
    color: ${Colors.secondaryColor};
  }
`;

export default NavItem;
