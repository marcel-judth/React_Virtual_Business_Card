import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { Colors } from '../../styles/Colors';

const CloseIcon = ({ onClick }) => {
  return (
    <CloseIconWrapper onClick={onClick}>
      <IoMdClose />
    </CloseIconWrapper>
  );
};

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 2rem;
  color: ${Colors.textColor};
  border-radius: 0.2rem;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: rotate(-90deg);
  }
`;

export default CloseIcon;
