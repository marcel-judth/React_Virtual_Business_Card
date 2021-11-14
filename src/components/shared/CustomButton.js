import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

function CustomButton({ Icon, children, onClick, isSubmit = true }) {
  return (
    <Button type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
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
    opacity: 0.6;
  }

  .btn-icon {
    margin-right: 1rem;
  }
`;

export default CustomButton;
