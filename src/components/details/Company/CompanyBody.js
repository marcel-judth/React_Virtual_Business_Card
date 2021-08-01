import Icon from "../../shared/Icon";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function CompanyBody({ company, toggle }) {
  return (
    <tr className={toggle ? "" : "company-details-hidden"}>
      <td className="company-table-td"></td>
      <td className="company-table-td">
        <table className="info-table">
          {company.branch && (
            <tr>
              <td className="table-title">Branche:</td>
              <td>{company.branch}</td>
            </tr>
          )}
          {company.website && (
            <tr>
              <td className="table-title">Website:</td>
              <td>{company.website}</td>
            </tr>
          )}
          {company.email && (
            <tr>
              <td className="table-title">Email:</td>
              <td>{company.email}</td>
            </tr>
          )}
          {company.mobileNr && (
            <tr>
              <td className="table-title">Mobile:</td>
              <td>{company.mobileNr}</td>
            </tr>
          )}
          {company.location && (
            <tr>
              <td className="table-title">Location:</td>
              <td>{company.location}</td>
            </tr>
          )}
        </table>
        <div className="company-icons">
          {company.facebookURL && (
            <Icon Icon={FaFacebookF} url={company.facebookURL} />
          )}
          {company.instagramURL && (
            <Icon Icon={FaInstagram} url={company.instagramURL} />
          )}
          {company.linkedInURL && (
            <Icon Icon={FaLinkedinIn} url={company.linkedInURL} />
          )}
        </div>
      </td>
      <td className="company-table-td"></td>
    </tr>
  );
}

export default CompanyBody;
