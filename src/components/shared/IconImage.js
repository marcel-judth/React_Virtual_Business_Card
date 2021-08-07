import styled from "styled-components";
import { Colors } from "../../styles/Colors";

function IconImage({ children }) {
  return <IconWrapper>{children}</IconWrapper>;
}

const IconWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  background: ${Colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  border-radius: 50%;
`;

export default IconImage;
