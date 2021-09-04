import Icon from '../../shared/Icon';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaPhone,
} from 'react-icons/fa';
import styled from 'styled-components';

function CompanyBody({ company, toggle, theme }) {
  return (
    <>
      {toggle && (
        <CoBody>
          <table>
            <tbody>
              {company.field && (
                <tr>
                  <td className='table-title'>Field:</td>
                  <td className='table-text'>{company.field}</td>
                </tr>
              )}
              {company.position && (
                <tr>
                  <td className='table-title'>Position:</td>
                  <td className='table-text'>{company.position}</td>
                </tr>
              )}
              {company.website && (
                <tr>
                  <td className='table-title'>Website:</td>
                  <td className='table-text'>
                    <a
                      href={
                        company.website.includes('http')
                          ? company.website
                          : 'http://' + company.website
                      }
                      target='_blank'
                      rel='noreferrer'
                    >
                      {company.website}
                    </a>
                  </td>
                </tr>
              )}
              {company.address && (
                <tr>
                  <td className='table-title'>Adress:</td>
                  <td className='table-text'>{company.address}</td>
                </tr>
              )}
              {company.city && (
                <tr>
                  <td className='table-title'>City:</td>
                  <td className='table-text'>
                    {(company.postcode ? company.postcode + ' ' : '') +
                      company.city}
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan='2'>
                  <div className='company-icons'>
                    {company.phoneNr && (
                      <Icon
                        theme={theme}
                        Icon={FaPhone}
                        url={'tel:' + company.phoneNr}
                      />
                    )}
                    {company.mobileNr && (
                      <Icon
                        theme={theme}
                        Icon={FaMobileAlt}
                        url={'tel:' + company.mobileNr}
                      />
                    )}
                    {company.email && (
                      <Icon
                        theme={theme}
                        Icon={FaEnvelope}
                        url={'mailto:' + company.email}
                      />
                    )}
                    {company.facebookURL && (
                      <Icon
                        theme={theme}
                        Icon={FaFacebookF}
                        url={company.facebookURL}
                      />
                    )}
                    {company.instagramURL && (
                      <Icon
                        theme={theme}
                        Icon={FaInstagram}
                        url={company.instagramURL}
                      />
                    )}
                    {company.linkedInURL && (
                      <Icon
                        theme={theme}
                        Icon={FaLinkedinIn}
                        url={company.linkedInURL}
                      />
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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

  .company-icons {
    display: flex;
    margin-top: 0.5rem;
    column-span: 2;
    > * {
      margin-right: 0.3rem;
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
