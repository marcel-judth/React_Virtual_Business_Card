import styled from 'styled-components';
import { BiErrorCircle } from 'react-icons/bi';

const ErrorPopup = (props) => {
  return (
    <ErrorPopupWrapper>
      <IconImage>
        <BiErrorCircle />
      </IconImage>
      <h3>Error</h3>
    </ErrorPopupWrapper>
  );
};

const ErrorPopupWrapper = styled.div`
  width: 30vw;
  display: block;

  @media (max-width: 700px) {
    width: 100vw;
    border: none;
  }
`;

export default ErrorPopup;
