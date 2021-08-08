import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaIdCardAlt,
  FaInstagram,
  FaLinkedinIn,
  FaPen,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";

import CustomButton from "../shared/CustomButton";
import CancelButton from "../shared/CancelButton";
import { Colors } from "../../styles/Colors";
import profilePicture from "../../img/profile.JPG";
import TextInput from "../shared/TextInput";
import CompanyHeader from "./CompanyHeader";
import { update } from "../../api";
import CompanyEdit from "./CompanyEdit";

function Edit({
  user,
  setUser,
  visible,
  setVisible,
  setLoading,
  setOverlayVisible,
}) {
  const history = useHistory();
  const [error, setError] = useState();
  const fileInput = useRef();
  const [image, setImage] = useState(profilePicture);
  const [editCompanyOpen, setEditCompanyOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState();

  console.log("reload");
  function handleImgChange(event) {
    // setUser({ ...user, img: event.target.files[0] });

    const url = URL.createObjectURL(event.target.files[0]);
    setImage(url);
  }

  function openCompanyEdit(index) {
    setSelectedCompany(index);
    setEditCompanyOpen(true);
    setVisible(false);
  }

  function handleSubmit(event) {
    // event.preventDefault();
    // setError("false");
    // setLoading(true);
    update(user, setError, history, setLoading, setVisible);
  }

  return (
    <>
      {visible && (
        <EditWrapper onSubmit={handleSubmit}>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={handleImgChange}
            ref={(file) => (fileInput.current = file)}
          />
          <ProfilePicture
            src={image}
            alt="profile picture"
            onClick={() => fileInput.current.click()}
          />
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
            onChange={(e) => setUser({ ...user, description: e.target.value })}
          />
          <TextInput
            placeholder="Phone Nr."
            Icon={FaPhoneAlt}
            value={user.mobileNr}
            onChange={(e) => setUser({ ...user, mobileNr: e.target.value })}
          />
          <TextInput
            placeholder="Facebook Url"
            Icon={FaFacebookF}
            value={user.facebookURL}
            onChange={(e) => setUser({ ...user, facebookURL: e.target.value })}
          />
          <TextInput
            placeholder="Instagram Url"
            Icon={FaInstagram}
            value={user.instagramURL}
            onChange={(e) => setUser({ ...user, instagramURL: e.target.value })}
          />
          <TextInput
            placeholder="LinkedIn Url"
            Icon={FaLinkedinIn}
            value={user.linkedInURL}
            onChange={(e) => setUser({ ...user, linkedInURL: e.target.value })}
          />
          <h4>Companies</h4>
          <div className="company-list">
            {user.companies.map((company, index) => {
              return (
                <CompanyHeader
                  onclick={(e) => openCompanyEdit(index)}
                  key={index}
                  company={company}
                />
              );
            })}
          </div>
          <span className="error-label">{error}</span>
          <CustomButton onClick={handleSubmit}>Save</CustomButton>
          <br />
          <CancelButton
            onClick={() => {
              setVisible(false);
            }}
          >
            Cancel
          </CancelButton>
        </EditWrapper>
      )}
      {editCompanyOpen && (
        <CompanyEdit
          user={user}
          setUser={setUser}
          index={selectedCompany}
          setVisible={setEditCompanyOpen}
          setOverlayVisible={setOverlayVisible}
          setParentVisible={setVisible}
        />
      )}
    </>
  );
}

const EditWrapper = styled.form`
  position: absolute;
  z-index: 1;
  top: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 3rem 4rem;
  border-radius: 1rem;
  min-width: 25rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .error-label {
    color: ${Colors.warningColor};
    font-size: 0.8rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .company-list {
    width: 100%;
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
