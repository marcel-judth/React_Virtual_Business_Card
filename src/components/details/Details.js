import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';
import { useParams } from 'react-router-dom';
import { FiDownload, FiShare } from 'react-icons/fi';
import SharePopup from './SharePopup';
import Loading from '../shared/Loading';
import { API_BaseURL } from '../../utils/constants';
import { getUserByID } from '../../api';
import { FaUserEdit } from 'react-icons/fa';
import Edit from '../edit/Edit';
import { Colors } from '../../styles/Colors';

function Details() {
  let { id } = useParams();
  const currentUserEmail = JSON.parse(localStorage.getItem('user'))?.email;
  const [popupDisplayed, setPopupDisplayed] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [editVisible, setEditVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [theme, setTheme] = useState({ userColor: Colors.primaryColor });

  useEffect(() => {
    getUserByID(id, setUser, setLoading, setTheme);
  }, [id]);

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
            <button
              onClick={() => {
                setPopupDisplayed(true);
              }}
            >
              <FiShare className='btn-icon' />
              Share
            </button>
            <button
              onClick={() => {
                window.open(API_BaseURL + '/users/download/' + user.email);
              }}
            >
              <FiDownload className='btn-icon' />
              download
            </button>
            {currentUserEmail && currentUserEmail === user.email && (
              <button
                onClick={() => {
                  setEditVisible(true);
                }}
              >
                <FaUserEdit className='btn-icon' />
                edit
              </button>
            )}
          </DetailsContent>
          <SharePopup
            user={user}
            theme={theme}
            popupDisplayed={popupDisplayed}
            setPopupDisplayed={setPopupDisplayed}
            setOverlayVisible={setOverlayVisible}
          />
          <Edit
            currentUser={user}
            visible={editVisible}
            setVisible={setEditVisible}
            setLoading={setLoading}
            setOverlayVisible={setOverlayVisible}
          />
          {(overlayVisible || editVisible || popupDisplayed) && (
            <ScreenOverlay />
          )}
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
  button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 0.5rem 0rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
    background: ${(props) => props.theme?.userColor ?? Colors.primaryColor};
    color: white;
    transition: 0.5s ease;
    width: 8rem;
    &:hover {
      transform: scale(1.2);
    }

    .btn-icon {
      margin-right: 0.5rem;
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
