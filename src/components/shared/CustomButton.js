import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

function CustomButton({ Icon, children, onClick }) {
  return (
    <Button onClick={onClick}>
      {Icon && <Icon className='btn-icon' />}
      {children}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  border-radius: 0.2rem;
  font-size: 1rem;
  background: ${Colors.primaryColor};
  color: white;
  border: 1.5px solid ${Colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  max-width: 15rem;
  width: 100%;

  &:hover {
    transform: scale(1.02);
  }

  .btn-icon {
    margin-right: 1rem;
  }
`;

export default CustomButton;
