import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
import logo from "../../../img/Infineon-Logo.png";

function CompanyHeaderMobile({ company, toggle, setToggle }) {
  return (
    <MobileTr onClick={() => setToggle(!toggle)}>
      <img src={logo} alt="company-logo" height="30px" />
      <div className="company-text">
        <h5>{company.name}</h5>
        <span>{company.position}</span>
      </div>
      {toggle ? (
        <IoIosArrowUp className="company-arrow" />
      ) : (
        <IoIosArrowDown className="company-arrow" />
      )}
    </MobileTr>
  );
}

const MobileTr = styled.tr`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;

  img {
    margin-right: 0.5rem;
    width: 4rem;
    height: auto;
  }

  .company-arrow {
    margin-left: auto;
  }
`;

export default CompanyHeaderMobile;
