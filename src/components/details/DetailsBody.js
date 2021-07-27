import styled from "styled-components";

import Companies from "./Companies";
import Skills from "./Skills";

function DetailsBody({ user }) {
  return (
    <BodyWrapper>
      <Companies companies={user.companies} />
      <Skills skills={user.skills} />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
