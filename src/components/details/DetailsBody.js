import styled from 'styled-components';

import Companies from './Companies';
import Skills from './Skills';

function DetailsBody({ user, theme }) {
  return (
    <BodyWrapper>
      {user.companies.length > 0 && (
        <Companies theme={theme} companies={user.companies} />
      )}
      {user.skills.length > 0 && <Skills theme={theme} skills={user.skills} />}
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default DetailsBody;
