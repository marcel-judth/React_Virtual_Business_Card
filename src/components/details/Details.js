import React from "react";
import styled from "styled-components";

import profilePicture from "../../img/profile.JPG";

function Details() {
  return (
    <DetailsWrapper>
      <DetailsContent>
        <DetailsHeader>
          <ProfilePicture src={profilePicture} />
          <div>
            <h3>Marcel Judth</h3>
            <h4>Softwareentwickler</h4>
            <p>Short description goes here</p>
          </div>
        </DetailsHeader>
      </DetailsContent>
    </DetailsWrapper>
  );
}

const ProfilePicture = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  object-fit: cover;
`;

const DetailsHeader = styled.div`
  display: flex;
`;

const DetailsContent = styled.div`
  background: white;
  align-self: center;
  padding: 5% 5%;
`;

const DetailsWrapper = styled.div`
  background-color: grey;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Details;
