import styled from "styled-components";

import Icon from "../shared/Icon";

function DetailsContentHeading({ iconType, headingText }) {
  return (
    <HeadingWrapper>
      <Icon Icon={iconType} />
      <h4 className="heading">{headingText}</h4>
    </HeadingWrapper>
  );
}

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  .heading {
    margin-left: 1rem;
  }
`;

export default DetailsContentHeading;
