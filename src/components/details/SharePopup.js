import { RiQrCodeLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { BsLink } from "react-icons/bs";
import styled from "styled-components";
import { Colors } from "../../styles/Colors";

import CancelButton from "../shared/CancelButton";
import Icon from "../shared/Icon";

function SharePopup({ user, popupDisplayed, setPopupDisplayed }) {
  return (
    <>
      {popupDisplayed && (
        <Popup>
          <h2>Share Your Card</h2>
          <div className="share-list-item">
            <Icon Icon={RiQrCodeLine} url={""} />
            <span>Share QR-Code</span>
          </div>
          <div className="share-line"></div>

          <div className="share-list-item">
            <Icon Icon={BsLink} url={""} />
            <span>Copy URL</span>
          </div>
          <div className="share-line"></div>

          <div className="share-list-item">
            <Icon Icon={ImWhatsapp} url={""} />
            <span>Send WhatsApp</span>
          </div>

          <div className="btn-wrapper">
            <CancelButton
              className="share-btn-close"
              onClick={() => setPopupDisplayed(false)}
            >
              Close
            </CancelButton>
          </div>
        </Popup>
      )}
      {popupDisplayed && <ScreenOverlay />}
    </>
  );
}

const Popup = styled.div`
  position: absolute;
  z-index: 1;
  background: white;
  padding: 2.5rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .share-list-item {
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
    span {
      margin-left: 1rem;
      font-size: 1rem;
    }
  }

  .share-line {
    width: 60%;
    height: 0.1rem;
    margin: 0 auto;
    background: ${Colors.textColor};
    border-radius: 1rem;
    opacity: 0.5;
  }

  .btn-wrapper {
    margin-top: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
`;

const ScreenOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
`;

export default SharePopup;
