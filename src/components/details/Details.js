import React from "react";
import styled from "styled-components";

import DetailsHeader from "./DetailsHeader";
import DetailsBody from "./DetailsBody";
import { useParams } from "react-router-dom";
import getUserByID from "../../api";
import { Colors } from "../../styles/Colors";
import { FiDownload } from "react-icons/fi";

function Details() {
  let { id } = useParams();
  const user = getUserByID(id);
  return (
    <DetailsWrapper>
      <DetailsContent>
        <DetailsHeader user={user} />
        <DetailsBody user={user} />
        <button>
          <FiDownload className="btn-icon" /> download
        </button>
      </DetailsContent>
    </DetailsWrapper>
  );
}

const DetailsContent = styled.div`
  background: white;
  align-self: center;
  padding: 5% 5%;

  button {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    display: block;
    width: fit-content;
    padding: 0.5rem 2.5rem;
    cursor: pointer;
    border-radius: 1rem;
    font-size: 1rem;
    background: ${Colors.userColor};
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }

    .btn-icon {
      margin-right: 1rem;
    }
  }
`;

const DetailsWrapper = styled.div`
  /* background-color: grey; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Details;
