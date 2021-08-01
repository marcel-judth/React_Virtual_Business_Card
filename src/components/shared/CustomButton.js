import styled from "styled-components";
import { Colors } from "../../styles/Colors";

function CustomButton({ Icon, children }) {
  return (
    <Button>
      {Icon && <Icon className="btn-icon" />}
      {children}
    </Button>
  );
}

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  border-radius: 0.2rem;
  font-size: 1rem;
  background: ${Colors.userColor};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }

  .btn-icon {
    margin-right: 1rem;
  }
`;

export default CustomButton;
