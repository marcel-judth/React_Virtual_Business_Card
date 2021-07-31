import { HiOfficeBuilding } from "react-icons/hi";
import styled from "styled-components";

import { Colors } from "../../styles/Colors";
import DetailsContentHeading from "./DetailsContentHeading";
import DeatailsContentLine from "./DeatailsContentLine";
import Company from "./Company";

function Companies({ companies }) {
  return (
    <CompaniesWrapper>
      <DetailsContentHeading
        iconType={HiOfficeBuilding}
        headingText="Companies"
      />
      <DeatailsContentLine />
      <CompanyToggle>
        <table className="company-table">
          {companies.map((element, index) => {
            return (
              <>
                <Company key={index} company={element} />
                {index + 1 < companies.length && (
                  <tr>
                    <td colSpan="3">
                      <div className="line"></div>
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </table>
      </CompanyToggle>
    </CompaniesWrapper>
  );
}

const CompanyToggle = styled.div`
  .company-icons {
    display: flex;
    > * {
      margin-right: 0.3rem;
    }
  }

  .company-text {
    span {
      font-size: 0.8rem;
      display: block;
      margin-top: 0.2rem;
    }
  }

  .company-table-header {
    cursor: pointer;
  }

  .table-title {
    color: ${Colors.textColor};
  }

  .info-table {
    margin-bottom: 1rem;
    font-size: 0.9rem;

    td {
      padding: 0.2rem 1rem 0.2rem 0rem;
    }
  }

  .company-table-td {
    padding: 1.2rem 0.5rem 0rem 0.5rem;
    vertical-align: middle;
  }

  img {
    height: 2rem;
    width: auto;
  }

  .company-arrow {
    font-size: 2rem;
    color: ${Colors.textColor};
    margin-left: 2rem;
  }

  .line {
    width: 70%;
    height: 0.1rem;
    background: grey;
    margin: 1rem auto;
    opacity: 0.5;
  }
`;

const CompaniesWrapper = styled.div`
  margin-right: 2rem;

  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0rem;

    .company-table {
      width: 100%;
    }
  }
`;

export default Companies;
