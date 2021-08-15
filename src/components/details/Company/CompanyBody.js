import Icon from '../../shared/Icon';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from 'react-icons/fa';
import styled from 'styled-components';

function CompanyBody({ company, toggle }) {
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
            </tbody>
          </table>
          <div className='company-icons'>
            {company.phoneNr && (
              <Icon Icon={FaPhone} url={'tel:' + company.phoneNr} />
            )}
            {company.email && (
              <Icon Icon={FaEnvelope} url={'mailto:' + company.email} />
            )}
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

  .company-icons {
    margin-left: 6.5rem;
    display: flex;

    > * {
      margin-right: 0.2rem;
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

    .company-icons {
      margin-left: 0 auto;
    }
  }
`;

export default CompanyBody;
