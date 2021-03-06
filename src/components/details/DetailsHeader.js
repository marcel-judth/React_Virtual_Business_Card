import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMobileAlt,
} from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

import Icon from '../shared/Icon';
import defaultProfilePicture from '../../img/profile.png';

function DetailsHeader({ user, theme, setPopupDisplayed }) {
  return (
    <Header>
      <ProfilePicture
        src={
          user.image && typeof user.image !== 'string'
            ? URL.createObjectURL(user.image)
            : defaultProfilePicture
        }
      />
      <div>
        <h3>
          {user.firstname} {user.lastname}
        </h3>
        <h5 className='jobtitle'>{user.jobtitle}</h5>
        <p className='description'>{user.description}</p>
        <IconsWrapper>
          {user.phoneNr && (
            <Icon theme={theme} Icon={FaPhone} url={'tel:' + user.phoneNr} />
          )}
          {user.mobileNr && (
            <Icon
              theme={theme}
              Icon={FaMobileAlt}
              url={'tel:' + user.mobileNr}
            />
          )}
          {user.email && (
            <Icon
              theme={theme}
              Icon={FaEnvelope}
              url={'mailto:' + user.email}
            />
          )}
          {user.facebookURL && (
            <Icon theme={theme} Icon={FaFacebookF} url={user.facebookURL} />
          )}
          {user.instagramURL && (
            <Icon theme={theme} Icon={FaInstagram} url={user.instagramURL} />
          )}
          {user.linkedInURL && (
            <Icon theme={theme} Icon={FaLinkedinIn} url={user.linkedInURL} />
          )}
        </IconsWrapper>
      </div>
      <div className='logo-wrapper'>
        <button
          onClick={() => {
            setPopupDisplayed(true);
          }}
        >
          <FiShare className='btn-icon' />
          Share
        </button>
      </div>
    </Header>
  );
}

const IconsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  > * {
    margin-right: 0.3rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

const ProfilePicture = styled.img`
  height: 20vw;
  width: 20vw;
  max-width: 15rem;
  max-height: 15rem;
  min-width: 8rem;
  min-height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
  cursor: pointer;
  transition: 0.5s ease;
  margin-left: 2.5vw;
  &:hover {
    transform: scale(1.5);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  .jobtitle {
    margin-top: 0.2rem;
    margin-left: 0.1rem;
  }

  .description {
    margin-top: 1rem;
  }

  .logo {
    width: 10vw;
    height: auto;
  }

  .logo-wrapper {
    margin-left: auto;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 5rem;

    > img {
      margin-bottom: 1rem;
      margin-left: 0;
      margin-right: 0;
    }
    .logo-wrapper {
      display: none;
    }

    > * {
      text-align: center;
    }
  }
`;

export default DetailsHeader;
