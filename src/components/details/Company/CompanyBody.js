import Icon from "../../shared/Icon";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

function CompanyBody({ company, toggle }) {
  return (
    <>
      {toggle && (
        <CoBody>
          <table>
            {company.branch && (
              <tr>
                <td className="table-title">Branche:</td>
                <td className="table-text">{company.branch}</td>
              </tr>
            )}
            {company.website && (
              <tr>
                <td className="table-title">Website:</td>
                <td className="table-text">
                  <a
                    href={
                      company.website.includes("http")
                        ? company.website
                        : "http://" + company.website
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {company.website}
                  </a>
                </td>
              </tr>
            )}
            {company.email && (
              <tr>
                <td className="table-title">Email:</td>
                <td className="table-text">
                  {" "}
                  <a href={"mailto:" + company.email}>{company.email}</a>
                </td>
              </tr>
            )}
            {company.mobileNr && (
              <tr>
                <td className="table-title">Mobile:</td>
                <td className="table-text">{company.mobileNr}</td>
                <a href={"tel:" + company.mobileNr}>{company.mobileNr}</a>
              </tr>
            )}
            {company.location && (
              <tr>
                <td className="table-title">Location:</td>
                <td className="table-text">{company.location}</td>
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
        </CoBody>
      )}
    </>
  );
}

const CoBody = styled.div`
  table {
    margin-left: 6.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;

    td {
      padding: 0.2rem 1rem 0.2rem 0rem;
      max-width: 20rem;
      word-wrap: break-word;
    }
  }

  .table-text {
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    table {
      margin: 0 auto;

      td {
        max-width: 15rem;
      }
    }
  }
`;

export default CompanyBody;
