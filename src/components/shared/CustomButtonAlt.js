import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

function CustomButtonAlt({ Icon, children, onClick }) {
  return (
    <Button onClick={onClick}>
      {Icon && <Icon className='btn-icon' />}
      {children}
    </Button>
  );
}

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  display: flex;
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  border-radius: 0.2rem;
  font-size: 1rem;
  background: white;
  color: ${Colors.secondaryColor};
  border: 0.2rem solid ${Colors.secondaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }

  .btn-icon {
    margin-right: 1rem;
  }
`;

export default CustomButtonAlt;
