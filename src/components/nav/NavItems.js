import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

const NavItem = ({ setNavStatus, navStatus, Icon, text, pathname, link }) => {
  const location = useLocation();

  const itemVariants = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <NavItemWrapper>
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setNavStatus(!navStatus)}
      >
        <Link
          className={
            'nav-link ' + (location.pathname === pathname ? 'active' : '')
          }
          to={link}
        >
          {Icon}
          {text}
        </Link>
      </motion.li>
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.div`
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
