import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CancelButton from '../shared/CancelButton';
import CustomButton from '../shared/CustomButton';
import TextInput from '../shared/TextInput';
import ScrollTop from '../shared/ScrollTop';
import _ from 'lodash';
import { RiToolsFill } from 'react-icons/ri';
import CloseIcon from '../shared/CloseIcon';

function SkillsEdit({
  currentUser,
  setCurrentUser,
  index,
  setVisible,
  setOverlayVisible,
  setParentVisible,
}) {
  const [user, setUser] = useState(_.cloneDeep(currentUser));

  useEffect(() => {
    setOverlayVisible(true);
  }, [setOverlayVisible]);

  function removeSkill() {
    setVisible(false);
    setOverlayVisible(false);
    setParentVisible(true);
    const tmp = user;
    tmp.skills.splice(index, 1);
    setCurrentUser({ ...user, skills: tmp.skills });
  }

  function handleSubmit() {
    const tmp = currentUser;
    currentUser.skills[index] = user.skills[index];

    setCurrentUser({ ...currentUser, skills: tmp.skills });
    closePopup();
  }

  function closePopup() {
    setVisible(false);
    setOverlayVisible(false);
    setParentVisible(true);
  }

  return (
    <SkillEditWrapper>
      <SkillForm>
        <h3>Edit Skill</h3>
        <TextInput
          placeholder='Skill'
          Icon={RiToolsFill}
          value={user.skills[index]}
          onChange={(e) => {
            const tmp = user;
            tmp.skills[index] = e.target.value;

            setUser({ ...user, skills: tmp.skills });
          }}
        />

        <CustomButton onClick={handleSubmit}>Save</CustomButton>
        <br />
        <CancelButton onClick={removeSkill}>Remove</CancelButton>
        <ScrollTop />
        <CloseIcon onClick={closePopup} />
      </SkillForm>
    </SkillEditWrapper>
  );
}

const SkillEditWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 15vh;
`;

const SkillForm = styled.div`
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

  input {
    margin-top: 2rem;
  }
`;

export default SkillsEdit;
