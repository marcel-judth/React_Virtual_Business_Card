import { RiQrCodeLine } from 'react-icons/ri';
import { ImWhatsapp } from 'react-icons/im';
import { BsLink } from 'react-icons/bs';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

import Icon from '../shared/Icon';
import { Link } from 'react-router-dom';
import ScrollTop from '../shared/ScrollTop';
import CloseIcon from '../shared/CloseIcon';

function SharePopup({ user, popupDisplayed, setPopupDisplayed }) {
  function copyURL() {
    var dummy = document.createElement('input'),
      text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    dummy.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  return (
    <>
      {popupDisplayed && (
        <Popup>
          <h2>Share Your Card</h2>
          <div className='share-list-item'>
            <Icon Icon={RiQrCodeLine} url={''} />
            <span>
              <Link to={'/qrcode/' + user.email}>Share QR-Code</Link>
            </span>
          </div>
          <div className='share-line'></div>

          <div className='share-list-item'>
            <Icon Icon={BsLink} url={''} />
            <span>
              <a href={window.location.pathname} onClick={copyURL}>
                Copy URL
              </a>
            </span>
          </div>
          <div className='share-line'></div>

          <div className='share-list-item'>
            <Icon Icon={ImWhatsapp} url={''} />
            <span>
              <a
                href='whatsapp://send?text=The text to share!'
                data-action='share/whatsapp/share'
              >
                Share via Whatsapp
              </a>
            </span>
          </div>
          <ScrollTop />
          <CloseIcon onClick={() => setPopupDisplayed(false)} />
        </Popup>
      )}
    </>
  );
}

const Popup = styled.div`
  position: absolute;
  top: 15vh;
  z-index: 1;
  max-width: 100vw;

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

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export default SharePopup;
