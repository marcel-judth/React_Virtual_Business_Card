import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import CancelButton from "../shared/CancelButton";
import CustomButton from "../shared/CustomButton";
import TextInput from "../shared/TextInput";

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

  function handleSubmit() {
    setVisible(false);
    setOverlayVisible(false);
    setParentVisible(true);
  }

  return (
    <CompanyEditWrapper>
      <TextInput
        placeholder="Firstname"
        Icon={FaUser}
        value={user.companies[index].name}
        onChange={(e) => {
          const copy = user;
          copy.companies[index].name = e.target.value;

          setUser({ ...user, copy });
        }}
      />
      <TextInput
        placeholder="Name"
        Icon={FaUser}
        value={user.companies[index].name}
        onChange={(e) => {
          user.companies[index].name = e.target.value;
          setUser(user);
        }}
      />
      <TextInput
        placeholder="Position"
        Icon={FaUser}
        value={user.companies[index].position}
        onChange={(e) => {
          user.companies[index].position = e.target.value;
          setUser(user);
        }}
      />
      <CustomButton onClick={handleSubmit}>Save</CustomButton>
      <br />
      <CancelButton
        onClick={() => {
          setVisible(false);
          setOverlayVisible(false);
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
