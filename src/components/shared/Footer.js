import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

function Footer() {
  return (
    <FooterWrapper>
      <div className='container'>
        <ul className='flex-row'>
          <li>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='link' to='/'>
              Details
            </Link>
          </li>
          <li>
            <Link className='link' to='/'>
              Privacy
            </Link>
          </li>
          <li>
            <Link className='link' to='/'>
              Impressum
            </Link>
          </li>
        </ul>
        <ul className='flex-row'>
          <li>
            <FaPhoneAlt />
          </li>
          <li>
            <FaEnvelope />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
        <p>&copy; 2021 - X-Act.me</p>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  color: white;
  background: ${Colors.primaryColor};

  padding: 5rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    display: flex;
    margin-bottom: 32px;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: center;
  }

  li {
    padding: 0 15px;
    margin-bottom: 16px;
  }

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  p {
    text-align: center;
    color: white;
  }

  .link {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Footer;
