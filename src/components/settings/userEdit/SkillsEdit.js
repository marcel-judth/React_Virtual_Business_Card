import { useState } from 'react';
import styled from 'styled-components';
import CancelButton from '../../shared/CancelButton';
import CustomButton from '../../shared/CustomButton';
import TextInput from '../../shared/TextInput';
import ScrollTop from '../../shared/ScrollTop';
import _ from 'lodash';
import { RiToolsFill } from 'react-icons/ri';
import CloseIcon from '../../shared/CloseIcon';

function SkillsEdit({
  currentUser,
  setCurrentUser,
  index,
  setVisible,
  setParentVisible,
}) {
  const [user, setUser] = useState(_.cloneDeep(currentUser));

  function removeSkill() {
    setVisible(false);
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
    setParentVisible(true);
  }

  return (
    <SkillEditWrapper>
      <SkillForm>
        <h3>Edit Skill</h3>
        <div>
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
        </div>
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
  width: 30vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  margin-bottom: 10vh;

  h3 {
    margin-bottom: 2rem;
  }

  @media (max-width: 700px) {
    width: 100vw;
    border: none;
  }
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

  @media (max-width: 700px) {
    padding: 3rem 5vh;
    min-width: 15rem;
    box-shadow: none;
  }
`;

export default SkillsEdit;
