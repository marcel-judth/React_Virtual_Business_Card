import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';
import { useParams } from 'react-router-dom';
import { FiDownload, FiShare } from 'react-icons/fi';
import SharePopup from './SharePopup';
import Loading from '../shared/Loading';
import { API_BaseURL } from '../../utils/constants';
import { getMyAccount, getUserByID } from '../../api';
import { FaUserEdit } from 'react-icons/fa';
import { Colors } from '../../styles/Colors';
import { HashLink as Link } from 'react-router-hash-link';

function Details() {
  let { id } = useParams();
  const currentUsername = JSON.parse(localStorage.getItem('user'))?.username;
  const [popupDisplayed, setPopupDisplayed] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [theme, setTheme] = useState({ userColor: Colors.primaryColor });

  useEffect(() => {
    if (id?.toLowerCase() === currentUsername?.toLowerCase())
      getMyAccount(setUser, setLoading, setTheme);
    else getUserByID(id, setUser, setLoading, setTheme);
  }, [id, currentUsername]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DetailsWrapper>
          <DetailsContent theme={theme}>
            <DetailsHeader
              theme={theme}
              user={user}
              setPopupDisplayed={setPopupDisplayed}
            />
            <DetailsBody theme={theme} user={user} />
            <div className='btn-group'>
              <button
                className='share-btn'
                onClick={() => {
                  setPopupDisplayed(true);
                }}
              >
                <FiShare className='btn-icon' />
                Share
              </button>
              <button
                onClick={() => {
                  window.open(API_BaseURL + '/users/download/' + user.username);
                }}
              >
                <FiDownload className='btn-icon' />
                download
              </button>
              {currentUsername && currentUsername === user.username && (
                <Link to='/settings'>
                  <button>
                    <FaUserEdit className='btn-icon' />
                    edit
                  </button>
                </Link>
              )}
            </div>
          </DetailsContent>
          <SharePopup
            user={user}
            theme={theme}
            popupDisplayed={popupDisplayed}
            setPopupDisplayed={setPopupDisplayed}
            setOverlayVisible={setOverlayVisible}
          />
          {(overlayVisible || popupDisplayed) && <ScreenOverlay />}
        </DetailsWrapper>
      )}
    </>
  );
}

const DetailsContent = styled.div`
  background: white;
  align-self: center;
  padding: 15vh 5%;
  min-width: 60%;

  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  button {
    margin: 0rem 0.5rem;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0.5rem 0rem;
    cursor: pointer;
    border-radius: 0.4rem;
    border: none;
    font-size: 1rem;
    background: ${(props) => props.theme?.userColor ?? Colors.primaryColor};
    color: white;
    transition: 0.5s ease;
    width: 8rem;
    &:hover {
      transform: scale(1.05);
    }

    .btn-icon {
      margin-right: 0.5rem;
    }
  }
  .share-btn {
    display: none;
  }

  @media (max-width: 800px) {
    .share-btn {
      display: flex;
    }
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScreenOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;
export default Details;
