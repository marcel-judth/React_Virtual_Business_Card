import styled from "styled-components";

function CancelButton({ children, onClick }) {
  return <Cancel onClick={onClick}>{children}</Cancel>;
}

const Cancel = styled.button`
  color: palevioletred;
  font-size: 1.5em;
  padding: 0.5rem 2.5rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: white;
    background: palevioletred;
  }
`;

export default CancelButton;
