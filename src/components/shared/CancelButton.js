import styled from "styled-components";

function CancelButton({ title, onClick }) {
  return <Cancel onClick={onClick}>{title}</Cancel>;
}

const Cancel = styled.button`
  color: palevioletred;
  font-size: 1.5em;
  padding: 0.25rem 1.5rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: white;
    background: palevioletred;
  }
`;

export default CancelButton;
