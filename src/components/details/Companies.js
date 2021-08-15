import { HiOfficeBuilding } from 'react-icons/hi';
import styled from 'styled-components';

import DetailsContentHeading from './DetailsContentHeading';
import DeatailsContentLine from './DeatailsContentLine';
import Company from './Company/Company';

function Companies({ companies }) {
  return (
    <CompaniesWrapper>
      <DetailsContentHeading
        iconType={HiOfficeBuilding}
        headingText='Companies'
      />
      <DeatailsContentLine />
      <CompanyToggle>
        {companies.map((element, index) => {
          return (
            <div key={index}>
              <Company company={element} />
              {index + 1 < companies.length && <div className='line'></div>}
            </div>
          );
        })}
      </CompanyToggle>
    </CompaniesWrapper>
  );
}

const CompanyToggle = styled.div`
  padding-top: 1rem;
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
