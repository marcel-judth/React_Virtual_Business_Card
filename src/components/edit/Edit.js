import styled from "styled-components";
import { useRef, useState } from "react";
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
import TextInput from "../shared/TextInput";
import CompanyHeader from "./CompanyHeader";
import { update } from "../../api";
import CompanyEdit from "./CompanyEdit";
import defaultProfilePicture from "../../img/profile.png";
import Logo from "../shared/Logo";


function Edit({
  user,
  setUser,
  visible,
  setVisible,
  setLoading,
  setOverlayVisible,
}) {
  const [error, setError] = useState();
  const fileInput = useRef();
  const [editCompanyOpen, setEditCompanyOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState();

  function handleImgChange(event) {
    setUser({ ...user, image: event.target.files[0] });
  }

  function addNewCompany(){
    const tmp = user;
    tmp.companies.push({})
    setUser({ ...user, companies: tmp.companies });
    openCompanyEdit(user.companies.length - 1)
  }

  function openCompanyEdit(index) {
    setSelectedCompany(index);
    setEditCompanyOpen(true);
    setVisible(false);
  }

  async function handleSubmit() {
    console.log(user.image)
    setLoading(true);
    await update(user, setError, setLoading);
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
          <Logo src={user.image && typeof user.image !== 'string' ? URL.createObjectURL(user.image) : defaultProfilePicture} fileInput={fileInput} isRounded/>
          <TextInput
            placeholder="Firstname"
            Icon={FaUser}
            required
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
          <TextInput
            placeholder="Lastname"
            Icon={FaUser}
            required
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
                  onclick={() => openCompanyEdit(index)}
                  key={index}
                  company={company}
                />
              );
            })}
            <button type="button" onClick={addNewCompany}>Add new</button>
          </div>
          <span className="error-label">{error}</span>
          <CustomButton onClick={handleSubmit}>Save</CustomButton>
          <br />
          <CancelButton
            onClick={() => {
              window.location.reload();
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
export default Edit;
