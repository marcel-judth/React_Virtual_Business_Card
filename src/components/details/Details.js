import React, { useEffect, useState } from "react";
import styled from "styled-components";

import DetailsHeader from "./DetailsHeader";
import DetailsBody from "./DetailsBody";
import { useHistory, useParams } from "react-router-dom";
import { Colors } from "../../styles/Colors";
import { FiDownload } from "react-icons/fi";
import SharePopup from "./SharePopup";
import Loading from "../shared/Loading";
import { API_BaseURL } from "../../utils/constants";
import { getUserByID } from "../../api";
import { FaUserEdit } from "react-icons/fa";

function Details() {
  let { id } = useParams();
  const [popupDisplayed, setPopupDisplayed] = useState(false);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getUserByID(id, setUser, setLoading);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DetailsWrapper>
          <DetailsContent>
            <DetailsHeader user={user} setPopupDisplayed={setPopupDisplayed} />
            <DetailsBody user={user} />
            <button
              onClick={() => {
                window.open(API_BaseURL + "/users/download/" + user.email);
              }}
            >
              <FiDownload className="btn-icon" />
              download
            </button>
            <button
              onClick={() => {
                history.push(`/details/${user.email}/edit`);
              }}
            >
              <FaUserEdit className="btn-icon" />
              edit
            </button>
          </DetailsContent>
          <SharePopup
            user={user}
            popupDisplayed={popupDisplayed}
            setPopupDisplayed={setPopupDisplayed}
          />
        </DetailsWrapper>
      )}
    </>
  );
}

const DetailsContent = styled.div`
  background: white;
  align-self: center;
  padding: 10% 5%;

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
    background: ${Colors.userColor};
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

export default Details;
