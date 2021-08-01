import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";

import Icon from "../shared/Icon";
import profilePicture from "../../img/profile.JPG";
import logo from "../../img/logo.png";

function DetailsHeader({ user, setPopupDisplayed }) {
  return (
    <Header>
      <ProfilePicture src={profilePicture} />
      <div>
        <h3>
          {user.firstname} {user.lastname}
        </h3>
        <h5 className="jobtitle">{user.jobtitle}</h5>
        <p className="description">{user.description}</p>
        <IconsWrapper>
          {user.mobileNr && (
            <Icon Icon={FaPhone} url={"tel:" + user.mobileNr} />
          )}
          {user.email && (
            <Icon Icon={FaEnvelope} url={"mailto:" + user.email} />
          )}
          {user.facebookURL && (
            <Icon Icon={FaFacebookF} url={user.facebookURL} />
          )}
          {user.instagramURL && (
            <Icon Icon={FaInstagram} url={user.instagramURL} />
          )}
          {user.linkedInURL && (
            <Icon Icon={FaLinkedinIn} url={user.linkedInURL} />
          )}
        </IconsWrapper>
      </div>
      <div className="logo-wrapper">
        <img src={logo} alt="logo-nfc-card" className="logo" />
        <button
          onClick={() => {
            setPopupDisplayed(true);
          }}
        >
          <FiShare className="btn-icon" />
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
