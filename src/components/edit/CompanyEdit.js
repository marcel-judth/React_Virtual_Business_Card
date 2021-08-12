import { useEffect, useRef } from "react";
import {  FaUser } from "react-icons/fa";
import styled from "styled-components";
import CancelButton from "../shared/CancelButton";
import CustomButton from "../shared/CustomButton";
import TextInput from "../shared/TextInput";
import defaultProfilePicture from "../../img/profile.png";
import Logo from "../shared/Logo";

function CompanyEdit({
  user,
  setUser,
  index,
  setVisible,
  setOverlayVisible,
  setParentVisible,
}) {
  useEffect(() => {
    setOverlayVisible(true);
  }, [setOverlayVisible]);
  const fileInput = useRef();

  function handleImgChange(event) {
    const tmp = user;
    tmp.companies[index].logo = event.target.files[0];
    setUser({ ...user, companies: tmp.companies });
  }

  function removeComapany(){
    setVisible(false);
    setOverlayVisible(false);
    setParentVisible(true);
    const tmp = user;
    tmp.companies.splice(index, 1); 
    setUser({ ...user, companies: tmp.companies });
  }

  function handleSubmit() {
    setVisible(false);
    setOverlayVisible(false);
    setParentVisible(true);
  }

  return (
    <CompanyEditWrapper>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={handleImgChange}
        ref={(file) => (fileInput.current = file)}
      />
      <Logo src={user.companies[index].logo ? URL.createObjectURL(user.companies[index].logo) : defaultProfilePicture} fileInput={fileInput}/>
      <TextInput
        placeholder="Name"
        Icon={FaUser}
        value={user.companies[index].name}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].name = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      /> 

      <TextInput
        placeholder="Field"
        required
        Icon={FaUser}
        value={user.companies[index].field}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].field = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />

      <TextInput
        placeholder="Position"
        Icon={FaUser}
        value={user.companies[index].position}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].position = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <TextInput
        placeholder="Website"
        Icon={FaUser}
        value={user.companies[index].website}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].website = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <TextInput
        placeholder="Email"
        Icon={FaUser}
        value={user.companies[index].email}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].email = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <TextInput
        placeholder="Phone Nr."
        Icon={FaUser}
        value={user.companies[index].phoneNr}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].phoneNr = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <TextInput
        placeholder="Address"
        Icon={FaUser}
        value={user.companies[index].address}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].address = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <TextInput
        placeholder="Postcode"
        Icon={FaUser}
        value={user.companies[index].postcode}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].postcode = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <TextInput
        placeholder="City"
        Icon={FaUser}
        value={user.companies[index].city}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].city = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <TextInput
        placeholder="Country"
        Icon={FaUser}
        value={user.companies[index].country}
        onChange={(e) => {
          const tmp = user;
          tmp.companies[index].country = e.target.value;

          setUser({ ...user, companies: tmp.companies });
        }}
      />
      <CustomButton onClick={handleSubmit}>Save</CustomButton>
      <br />
      <CancelButton
        onClick={removeComapany}
      >
        Remove
      </CancelButton>
      <br />
      <CancelButton
        onClick={() => {
          window.location.reload();
        }}
      >
        Cancel
      </CancelButton>
    </CompanyEditWrapper>
  );
}

const CompanyEditWrapper = styled.div`
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
`;

export default CompanyEdit;
