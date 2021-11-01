import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import {
  FaAddressBook,
  FaCity,
  FaFacebookF,
  FaFlag,
  FaIdCardAlt,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarker,
  FaMobile,
  FaPen,
  FaPhoneAlt,
  FaUser,
  FaTwitter,
  FaXing,
  FaTelegramPlane,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import CustomButton from '../../shared/CustomButton';
import { Colors } from '../../../styles/Colors';
import TextInput from '../../shared/TextInput';
import CompanyHeader from './CompanyHeader';
import { getMyAccount, update, uploadImage } from '../../../api';
import CompanyEdit from './CompanyEdit';
import defaultProfilePicture from '../../../img/userdefault.png';
import Logo from '../../shared/Logo';
import ScrollTop from '../../shared/ScrollTop';
import _ from 'lodash';
import { IoIosAddCircle } from 'react-icons/io';
import SkillHeader from './SkillHeader';
import SkillsEdit from './SkillsEdit';
import { SwatchesPicker } from 'react-color';
import Loading from '../../shared/Loading';
import { MdDateRange } from 'react-icons/md';
import { userHasLicense } from '../../../utils/license';

function UserEdit() {
  const [error, setError] = useState();
  const fileInput = useRef();
  const [editCompanyOpen, setEditCompanyOpen] = useState(false);
  const [editSkillOpen, setEditSkillOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedSkill, setSelectedSkill] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [user, setUser] = useState();
  const [profLicense, setprofLicense] = useState(false);

  useEffect(() => {
    getMyAccount(
      (userObj) => {
        setUser(_.cloneDeep(userObj));
        setprofLicense(userHasLicense('business'));
        console.log(profLicense);
      },
      setLoading,
      () => {}
    );
  }, [profLicense]);

  async function handleImgChange(event) {
    setLoading(true);
    const file = event.target.files[0];

    const url = await uploadImage(file);

    setUser({ ...user, image: url });
    setLoading(false);
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
      {loading ? (
        <Loading />
      ) : (
        <>
          {visible && (
            <>
              <EditWrapper>
                <form>
                  <div></div>
                </form>
                <EditForm onSubmit={handleSubmit}>
                  <input
                    style={{ display: 'none' }}
                    type='file'
                    accept='image/*'
                    onChange={handleImgChange}
                    ref={(file) => (fileInput.current = file)}
                  />
                  <Logo
                    src={user.image ? user.image : defaultProfilePicture}
                    fileInput={fileInput}
                    isRounded
                    disabled={!profLicense}
                  />
                  <div className='input-wrappers'>
                    <TextInput
                      placeholder='First Name'
                      Icon={FaUser}
                      required
                      value={user.firstname}
                      onChange={(e) =>
                        setUser({ ...user, firstname: e.target.value })
                      }
                    />

                    <TextInput
                      placeholder='Last Name'
                      Icon={FaUser}
                      required
                      value={user.lastname}
                      onChange={(e) =>
                        setUser({ ...user, lastname: e.target.value })
                      }
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
                      value={user.phoneNr}
                      onChange={(e) =>
                        setUser({ ...user, phoneNr: e.target.value })
                      }
                    />
                    <TextInput
                      placeholder='Mobile Nr.'
                      Icon={FaMobile}
                      value={user.mobileNr}
                      onChange={(e) =>
                        setUser({ ...user, mobileNr: e.target.value })
                      }
                      disabled={!profLicense}
                    />

                    <TextInput
                      placeholder='Job Title'
                      Icon={FaIdCardAlt}
                      value={user.jobtitle}
                      onChange={(e) =>
                        setUser({ ...user, jobtitle: e.target.value })
                      }
                      disabled={!profLicense}
                    />

                    <TextInput
                      placeholder='Date of Birth (dd.mm.yyyy)'
                      Icon={MdDateRange}
                      value={user.dateOfBirth}
                      pattern='(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}'
                      onChange={(e) =>
                        setUser({ ...user, dateOfBirth: e.target.value })
                      }
                      disabled={!profLicense}
                    />

                    <TextInput
                      placeholder='Street & Number'
                      Icon={FaAddressBook}
                      value={user.street}
                      onChange={(e) =>
                        setUser({ ...user, street: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='Zip Code'
                      Icon={FaMapMarker}
                      value={user.zipCode}
                      onChange={(e) =>
                        setUser({ ...user, zipCode: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='City'
                      Icon={FaCity}
                      value={user.city}
                      onChange={(e) =>
                        setUser({ ...user, city: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='Country'
                      Icon={FaFlag}
                      value={user.country}
                      onChange={(e) =>
                        setUser({ ...user, country: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='Facebook Url'
                      Icon={FaFacebookF}
                      value={user.facebookURL}
                      onChange={(e) =>
                        setUser({ ...user, facebookURL: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='Instagram Url'
                      Icon={FaInstagram}
                      value={user.instagramURL}
                      onChange={(e) =>
                        setUser({ ...user, instagramURL: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='TikTok Url'
                      Icon={SiTiktok}
                      value={user.tiktokURL}
                      onChange={(e) =>
                        setUser({ ...user, tiktokURL: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='Twitter Url'
                      Icon={FaTwitter}
                      value={user.twitterURL}
                      onChange={(e) =>
                        setUser({ ...user, twitterURL: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='LinkedIn Url'
                      Icon={FaLinkedinIn}
                      value={user.linkedInURL}
                      onChange={(e) =>
                        setUser({ ...user, linkedInURL: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='XING Url'
                      Icon={FaXing}
                      value={user.xingURL}
                      onChange={(e) =>
                        setUser({ ...user, xingURL: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                    <TextInput
                      placeholder='Telegram Url'
                      Icon={FaTelegramPlane}
                      value={user.telegramURL}
                      onChange={(e) =>
                        setUser({ ...user, telegramURL: e.target.value })
                      }
                      disabled={!profLicense}
                    />
                  </div>
                  <span>*Upgrade to business license to edit all fields.</span>
                  <div className='d-flex'>
                    <div className='company-wrapper'>
                      <h4>Companies</h4>
                      <div className='company-list'>
                        {user.companies?.map((company, index) => {
                          return (
                            <CompanyHeader
                              onclick={() => openCompanyEdit(index)}
                              key={index}
                              company={company}
                            />
                          );
                        })}
                        {profLicense ? (
                          <button
                            className='add-btn'
                            type='button'
                            onClick={addNewCompany}
                          >
                            <IoIosAddCircle />
                          </button>
                        ) : (
                          <p>
                            To add companies please upgrade to professional
                            license.
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='skills-wrapper'>
                      <h4>Skills</h4>
                      <div className='skills-list'>
                        {user.skills?.map((skill, index) => {
                          return (
                            <SkillHeader
                              skill={skill}
                              key={index}
                              onclick={() => openSkillsEdit(index)}
                            />
                          );
                        })}
                        {profLicense ? (
                          <button
                            className='add-btn'
                            type='button'
                            onClick={addNewSkill}
                          >
                            <IoIosAddCircle />
                          </button>
                        ) : (
                          <p>
                            To add skills please upgrade to business license.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <SwatchesPicker
                    color={user.color ? user.color : undefined}
                    onChangeComplete={handleColorChange}
                  />
                  <div>
                    <div className='checkbox-wrapper'>
                      <input
                        type='checkbox'
                        id='cboxPublic'
                        checked={user.public}
                        onChange={() =>
                          setUser({ ...user, public: !user.public })
                        }
                      />
                      <label htmlFor='cboxPublic'>
                        My profile should be visible in the networking portal
                      </label>
                    </div>
                  </div>
                  <span className='error-label'>{error}</span>
                  <CustomButton onClick={handleSubmit}>Save</CustomButton>
                  <ScrollTop />
                </EditForm>
              </EditWrapper>
            </>
          )}
          {editCompanyOpen && (
            <CompanyEdit
              currentUser={user}
              setCurrentUser={setUser}
              index={selectedCompany}
              setVisible={setEditCompanyOpen}
              setParentVisible={setVisible}
            />
          )}
          {editSkillOpen && (
            <SkillsEdit
              currentUser={user}
              setCurrentUser={setUser}
              index={selectedSkill}
              setVisible={setEditSkillOpen}
              setParentVisible={setVisible}
            />
          )}
          {/* {error && <ErrorPopup error={error} setError={setError} />} */}
        </>
      )}
    </>
  );
}

const EditWrapper = styled.div`
  display: block;
  margin: 0rem auto;
  margin-top: 15vh;
  margin-bottom: 10vh;
`;

const EditForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 3rem 4rem;
  max-width: 100rem;
  margin: 0 auto;
  .input-wrappers {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

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

  .d-flex {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .error-label {
    color: ${Colors.warningColor};
    font-size: 0.8rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .company-wrapper {
    min-width: 20rem;
    text-align: center;
    width: 35vw;
  }

  .skills-wrapper {
    min-width: 20rem;
    text-align: center;
    width: 35vw;
  }

  .company-list,
  .skills-list {
    width: 100%;
  }

  p {
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: start;
    padding-left: 1rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;

    input:checked {
      background-color: ${Colors.primaryColor};
      background-color: #41b883;
    }

    label {
      margin-left: 0.5rem;
      font-size: 0.8rem;
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    padding: 3rem 5vh;
    min-width: 15rem;
    box-shadow: none;
  }
`;
export default UserEdit;
