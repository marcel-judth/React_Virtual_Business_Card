import styled from "styled-components";
import { Colors } from "../../styles/Colors";

function DetailsContentHeading() {
  return <Line />;
}

const Line = styled.div`
  background: ${Colors.textColor};
  width: 100%;
  height: 0.1rem;
  border-radius: 50%;
  margin-top: 0.5rem;
  opacity: 0.4;
`;

export default DetailsContentHeading;
