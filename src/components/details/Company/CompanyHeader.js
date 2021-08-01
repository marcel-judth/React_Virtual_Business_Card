import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../../../img/Infineon-Logo.png";

function CompanyHeader({ company, toggle, setToggle }) {
  return (
    <tr className="company-table-header" onClick={() => setToggle(!toggle)}>
      <td className="company-table-td">
        <img src={logo} alt="company-logo" height="30px" />
      </td>
      <td className="company-table-td">
        <div className="company-text">
          <h5>{company.name}</h5>
          <span>{company.position}</span>
        </div>
      </td>
      <td className="company-table-td">
        {toggle ? (
          <IoIosArrowUp className="company-arrow" />
        ) : (
          <IoIosArrowDown className="company-arrow" />
        )}
      </td>
    </tr>
  );
}

export default CompanyHeader;
