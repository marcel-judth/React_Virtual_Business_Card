import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

function CompanyHeader({ company, toggle, setToggle }) {
  return (
    <CoHeader onClick={() => setToggle(!toggle)}>
      <div className='co-logo-text-wrapper'>
        {company.logo && (
          <img src={company.logo} alt='company-logo' height='30px' />
        )}
        <div className='co-text'>
          <h5>{company.name}</h5>
          <span>{company.position}</span>
        </div>
      </div>

      {toggle ? (
        <IoIosArrowUp className='co-arrow' />
      ) : (
        <IoIosArrowDown className='co-arrow' />
      )}
    </CoHeader>
  );
}

const CoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem 1rem;
  padding-bottom: 0.5rem;
  min-width: 33rem;

  .co-logo-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .co-arrow {
    font-size: 2rem;
    color: ${Colors.textColor};
    margin-left: auto;
  }

  .co-text {
    margin-left: 0.5rem;
    margin-right: 1rem;
    max-width: 30rem;
  }

  span {
    color: ${Colors.textColor};
    margin-top: 1rem;
    font-size: 0.8rem;
  }

  h5 {
    color: black;
    opacity: 0.8;
    font-weight: 500;
  }

  img {
    width: 5rem;
    height: auto;

    max-height: 3.5rem;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;

    img {
      width: 3rem;
    }

    .co-text {
      margin-right: 0.5rem;
    }

    .co-arrow {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    min-width: 90vw;
  }
`;

export default CompanyHeader;
