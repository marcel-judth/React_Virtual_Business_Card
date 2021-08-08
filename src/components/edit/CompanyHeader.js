import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import logo from "../../img/Infineon-Logo.png";
import { Colors } from "../../styles/Colors";

function CompanyHeader({ company, onclick }) {
  return (
    <Company onClick={onclick}>
      <img src={logo} alt="company-logo" height="30px" />

      <p>{company.name}</p>

      <MdEdit className="icon" />
    </Company>
  );
}

const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0.5rem 0rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 3rem;
    height: auto;
    margin-right: 1rem;
  }
  p {
    font-size: 0.8rem;
    text-align: left;
    max-width: 10rem;
  }
  .icon {
    margin-left: auto;
    font-size: 1rem;
    color: ${Colors.textColor};
  }
`;

export default CompanyHeader;
