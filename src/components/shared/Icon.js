import React from "react";
import styled from "styled-components";

import { Colors } from "../../styles/Colors";

function Icon({ Icon, url }) {
  return (
    <a href={url}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
    </a>
  );
}

const IconWrapper = styled.div`
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
  background: ${Colors.userColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Icon;
