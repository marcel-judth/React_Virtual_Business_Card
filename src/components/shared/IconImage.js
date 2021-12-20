import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

function IconImage({ children }) {
  return <IconWrapper>{children}</IconWrapper>;
}

const IconWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  background: ${Colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  margin: auto;
`;

export default IconImage;
