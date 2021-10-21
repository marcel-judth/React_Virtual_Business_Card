import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

function CancelButton({ children, onClick }) {
  return <Cancel onClick={onClick}>{children}</Cancel>;
}

const Cancel = styled.button`
  color: ${Colors.errorColor};
  font-size: 1.5em;
  padding: 0.5rem 2.5rem;
  border: 1.5px solid ${Colors.errorColor};
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  background: white;
  max-width: 15rem;

  &:hover {
    color: white;
    background: ${Colors.errorColor};
  }
`;

export default CancelButton;
