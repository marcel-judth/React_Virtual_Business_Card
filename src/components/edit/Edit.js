import styled from 'styled-components';
import { useRef, useState } from 'react';
import {
  FaFacebookF,
  FaIdCardAlt,
  FaInstagram,
  FaLinkedinIn,
  FaPen,
  FaPhoneAlt,
  FaUser,
} from 'react-icons/fa';

import CustomButton from '../shared/CustomButton';
import { Colors } from '../../styles/Colors';
import TextInput from '../shared/TextInput';
import CompanyHeader from './CompanyHeader';
import { update } from '../../api';
import CompanyEdit from './CompanyEdit';
import defaultProfilePicture from '../../img/profile.png';
import Logo from '../shared/Logo';
import ScrollTop from '../shared/ScrollTop';
import _ from 'lodash';
import { IoIosAddCircle } from 'react-icons/io';
import SkillHeader from './SkillHeader';
import SkillsEdit from './SkillsEdit';
import CloseIcon from '../shared/CloseIcon';
import { SwatchesPicker } from 'react-color';

function Edit({
  currentUser,
  visible,
  setVisible,
  setLoading,
  setOverlayVisible,
}) {
  const [error, setError] = useState();
  const fileInput = useRef();
  const [editCompanyOpen, setEditCompanyOpen] = useState(false);
  const [editSkillOpen, setEditSkillOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedSkill, setSelectedSkill] = useState();
  const [user, setUser] = useState(_.cloneDeep(currentUser));

  function handleImgChange(event) {
    setUser({ ...user, image: event.target.files[0] });
  }

  function handleColorChange(color) {
    setUser({ ...user, color: color.hex });
  }

  function addNewCompany() {
    const tmp = user;
    tmp.companies.push({});
    setUser({ ...user, companies: tmp.companies });
    openCompanyEdit(user.companies.length - 1);
  }

  function openCompanyEdit(index) {
    setSelectedCompany(index);
    setEditCompanyOpen(true);
    setVisible(false);
  }

  function addNewSkill() {
    const tmp = user;
    tmp.skills.push('new skill');
    setUser({ ...user, skills: tmp.skills });
  }

  function openSkillsEdit(index) {
    setSelectedSkill(index);
    setEditSkillOpen(true);
    setVisible(false);
  }

  async function handleSubmit() {
    setLoading(true);
    await update(user, setError, setLoading);
  }

  return (
    <>
      {visible && (
        <EditWrapper>
          <EditForm onSubmit={handleSubmit}>
            <input
              style={{ display: 'none' }}
              type='file'
              accept='image/*'
              onChange={handleImgChange}
              ref={(file) => (fileInput.current = file)}
            />
            <Logo
              src={
                user.image && typeof user.image !== 'string'
                  ? URL.createObjectURL(user.image)
                  : defaultProfilePicture
              }
              fileInput={fileInput}
              isRounded
            />
            <TextInput
              placeholder='First Name'
              Icon={FaUser}
              required
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />
            <TextInput
              placeholder='Last Name'
              Icon={FaUser}
              required
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
            <TextInput
              placeholder='Job Title'
              Icon={FaIdCardAlt}
              value={user.jobtitle}
              onChange={(e) => setUser({ ...user, jobtitle: e.target.value })}
            />
            <TextInput
              placeholder='Description'
              Icon={FaPen}
              value={user.description}
              onChange={(e) =>
                setUser({ ...user, description: e.target.value })
              }
            />
            <TextInput
              placeholder='Phone Nr.'
              Icon={FaPhoneAlt}
              value={user.mobileNr}
              onChange={(e) => setUser({ ...user, mobileNr: e.target.value })}
            />
            <TextInput
              placeholder='Facebook Url'
              Icon={FaFacebookF}
              value={user.facebookURL}
              onChange={(e) =>
                setUser({ ...user, facebookURL: e.target.value })
              }
            />
            <TextInput
              placeholder='Instagram Url'
              Icon={FaInstagram}
              value={user.instagramURL}
              onChange={(e) =>
                setUser({ ...user, instagramURL: e.target.value })
              }
            />
            <TextInput
              placeholder='LinkedIn Url'
              Icon={FaLinkedinIn}
              value={user.linkedInURL}
              onChange={(e) =>
                setUser({ ...user, linkedInURL: e.target.value })
              }
            />

            <h4>Companies</h4>
            <div className='company-list'>
              {user.companies.map((company, index) => {
                return (
                  <CompanyHeader
                    onclick={() => openCompanyEdit(index)}
                    key={index}
                    company={company}
                  />
                );
              })}
              <button className='add-btn' type='button' onClick={addNewCompany}>
                <IoIosAddCircle />
              </button>
            </div>

            <h4>Skills</h4>
            <div className='skills-list'>
              {user.skills.map((skill, index) => {
                return (
                  <SkillHeader
                    skill={skill}
                    key={index}
                    onclick={() => openSkillsEdit(index)}
                  />
                );
              })}
              <button className='add-btn' type='button' onClick={addNewSkill}>
                <IoIosAddCircle />
              </button>
            </div>

            <SwatchesPicker
              color={user.color}
              onChangeComplete={handleColorChange}
            />
            <span className='error-label'>{error}</span>
            <CustomButton onClick={handleSubmit}>Save</CustomButton>
            <ScrollTop />
          </EditForm>
          <CloseIcon
            onClick={() => {
              setVisible(false);
              setUser(_.cloneDeep(currentUser));
            }}
          />
        </EditWrapper>
      )}
      {editCompanyOpen && (
        <CompanyEdit
          currentUser={user}
          setCurrentUser={setUser}
          index={selectedCompany}
          setVisible={setEditCompanyOpen}
          setOverlayVisible={setOverlayVisible}
          setParentVisible={setVisible}
        />
      )}
      {editSkillOpen && (
        <SkillsEdit
          currentUser={user}
          setCurrentUser={setUser}
          index={selectedSkill}
          setVisible={setEditSkillOpen}
          setOverlayVisible={setOverlayVisible}
          setParentVisible={setVisible}
        />
      )}
    </>
  );
}

const EditWrapper = styled.div`
  position: absolute;
  top: 15vh;
  z-index: 1;
  max-width: 100vw;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const EditForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 3rem 4rem;
  border-radius: 1rem;
  min-width: 25rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .add-btn {
    font-size: 2rem;
    color: ${Colors.primaryColor};
    border: none;
    width: 2rem;
    display: block;
    background: none;
    margin-left: auto;
    margin-right: auto;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  h4 {
    margin-top: 2rem;
  }

  .error-label {
    color: ${Colors.warningColor};
    font-size: 0.8rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .company-list,
  .skills-list {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 3rem 5vh;
    min-width: 15rem;
  }
`;
export default Edit;
