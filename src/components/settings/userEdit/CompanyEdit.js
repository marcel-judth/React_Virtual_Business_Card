import { useEffect, useRef, useState } from 'react';
import {
  FaCity,
  FaEnvelope,
  FaFacebookF,
  FaIdCardAlt,
  FaIndustry,
  FaInstagram,
  FaLinkedinIn,
  FaMobile,
  FaPhone,
} from 'react-icons/fa';
import { BsCardHeading } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiPostStamp } from 'react-icons/gi';
import styled from 'styled-components';
import CancelButton from '../../shared/CancelButton';
import CustomButton from '../../shared/CustomButton';
import TextInput from '../../shared/TextInput';
import defaultProfilePicture from '../../../img/profile.png';
import Logo from '../../shared/Logo';
import ScrollTop from '../../shared/ScrollTop';
import _ from 'lodash';
import CloseIcon from '../../shared/CloseIcon';
import Loading from '../../shared/Loading';
import { uploadImage } from '../../../api';

function CompanyEdit({
  currentUser,
  setCurrentUser,
  index,
  setVisible,
  setParentVisible,
}) {
  const fileInput = useRef();
  const [user, setUser] = useState(_.cloneDeep(currentUser));
  const [loading, setLoading] = useState(false);

  async function handleImgChange(event) {
    setLoading(true);

    const url = await uploadImage(event.target.files[0]);

    const tmp = user;
    tmp.companies[index].logo = url;
    setUser({ ...user, companies: tmp.companies });
    setLoading(false);
  }

  function removeCompany() {
    setVisible(false);
    setParentVisible(true);
    const tmp = user;
    tmp.companies.splice(index, 1);
    setCurrentUser({ ...currentUser, companies: tmp.companies });
  }

  function handleSubmit() {
    const tmp = currentUser;
    currentUser.companies[index] = user.companies[index];
    console.log(tmp);
    setCurrentUser({ ...currentUser, companies: tmp.companies });
    closePopup();
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function closePopup() {
    setVisible(false);
    setParentVisible(true);
  }

  return (
    <CompanyEditWrapper>
      {loading ? (
        <Loading />
      ) : (
        <CompanyEditForm>
          <input
            style={{ display: 'none' }}
            type='file'
            accept='image/*'
            onChange={handleImgChange}
            ref={(file) => (fileInput.current = file)}
          />
          <Logo
            src={
              user.companies[index].logo
                ? user.companies[index].logo
                : defaultProfilePicture
            }
            fileInput={fileInput}
          />
          <TextInput
            placeholder='Name'
            Icon={BsCardHeading}
            value={user.companies[index].name}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].name = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />

          <TextInput
            placeholder='Field'
            required
            Icon={FaIndustry}
            value={user.companies[index].field}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].field = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />

          <TextInput
            placeholder='Position'
            Icon={FaIdCardAlt}
            value={user.companies[index].position}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].position = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Website'
            Icon={AiOutlineGlobal}
            value={user.companies[index].website}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].website = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Email'
            Icon={FaEnvelope}
            value={user.companies[index].email}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].email = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Phone Nr.'
            Icon={FaPhone}
            value={user.companies[index].phoneNr}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].phoneNr = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Mobile Nr.'
            Icon={FaMobile}
            value={user.companies[index].mobileNr}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].mobileNr = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Address'
            Icon={GoLocation}
            value={user.companies[index].address}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].address = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Postcode'
            Icon={GiPostStamp}
            value={user.companies[index].postcode}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].postcode = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='City'
            Icon={FaCity}
            value={user.companies[index].city}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].city = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Country'
            Icon={GoLocation}
            value={user.companies[index].country}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].country = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />

          <TextInput
            placeholder='Facebook Url'
            Icon={FaFacebookF}
            value={user.companies[index].facebookURL}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].facebookURL = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='Instagram Url'
            Icon={FaInstagram}
            value={user.companies[index].instagramURL}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].instagramURL = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />
          <TextInput
            placeholder='LinkedIn Url'
            Icon={FaLinkedinIn}
            value={user.companies[index].linkedInURL}
            onChange={(e) => {
              const tmp = user;
              tmp.companies[index].linkedInURL = e.target.value;

              setUser({ ...user, companies: tmp.companies });
            }}
          />

          <CustomButton onClick={handleSubmit}>Save</CustomButton>
          <br />
          <CancelButton onClick={removeCompany}>Remove</CancelButton>
          <CloseIcon onClick={closePopup} />
        </CompanyEditForm>
      )}
      <ScrollTop />
    </CompanyEditWrapper>
  );
}

const CompanyEditWrapper = styled.div`
  width: 30vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  margin-bottom: 10vh;
  @media (max-width: 700px) {
    width: 100vw;
    border: none;
  }
`;

const CompanyEditForm = styled.div`
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
  @media (max-width: 700px) {
    padding: 3rem 5vh;
    min-width: 15rem;
    box-shadow: none;
  }
`;

export default CompanyEdit;
