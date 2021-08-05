import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { FaIdCardAlt, FaPen, FaPhoneAlt, FaUser } from "react-icons/fa";

import CustomButton from "../shared/CustomButton";
import CancelButton from "../shared/CancelButton";
import { Colors } from "../../styles/Colors";
import profilePicture from "../../img/profile.JPG";
import TextInput from "../shared/TextInput";
import { useEffect } from "react";
import Loading from "../shared/Loading";
import { getUserByID, update } from "../../api";

function Edit() {
  const history = useHistory();
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userObject = JSON.parse(localStorage.getItem("user"));

    if (!userObject) history.push("/login");

    getUserByID(userObject.email, setUser, setLoading);
  }, [history]);

  function handleSubmit() {
    setLoading(true);
    update(user, setError, history, setLoading);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <EditWrapper onSubmit={handleSubmit}>
          <div className="content-wrapper">
            <ProfilePicture src={profilePicture} alt="profile picture" />

            <TextInput
              placeholder="Firstname"
              Icon={FaUser}
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />

            <TextInput
              placeholder="Lastname"
              Icon={FaUser}
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />

            <TextInput
              placeholder="Jobtitle"
              Icon={FaIdCardAlt}
              value={user.jobtitle}
              onChange={(e) => setUser({ ...user, jobtitle: e.target.value })}
            />
            <TextInput
              placeholder="Description"
              Icon={FaPen}
              value={user.description}
              onChange={(e) =>
                setUser({ ...user, description: e.target.value })
              }
            />
            <TextInput
              placeholder="Phone Nr."
              Icon={FaPhoneAlt}
              value={user.mobileNr}
              onChange={(e) => setUser({ ...user, mobileNr: e.target.value })}
            />

            <span className="error-label">{error}</span>
            <CustomButton onClick={handleSubmit}>Save</CustomButton>
            <br />
            <CancelButton
              onClick={() => {
                history.push("/details/" + user.email);
              }}
            >
              Cancel
            </CancelButton>
          </div>
        </EditWrapper>
      )}
    </>
  );
}

const EditWrapper = styled.form`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;

  .error-label {
    color: ${Colors.warningColor};
    font-size: 0.8rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 3rem 4rem;
    border-radius: 1rem;
    border: 1px solid lightgrey;
    min-width: 25rem;
  }
`;

const ProfilePicture = styled.img`
  width: 10vw;
  height: 10vw;
  min-width: 5rem;
  min-height: 5rem;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

export default Edit;
