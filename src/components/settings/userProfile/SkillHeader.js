import { MdEdit } from 'react-icons/md';
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

function SkillHeader({ skill, onclick }) {
  return (
    <Skill onClick={onclick}>
      <div className='dot' />
      <p>{skill}</p>
      <MdEdit className='icon' />
    </Skill>
  );
}

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0.5rem auto;
  padding: 0.5rem 0.5rem;
  width: 100%;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  max-width: 30rem;

  .dot {
    min-width: 0.5rem;
    height: 0.5rem;
    background: ${Colors.userColor};
    border-radius: 50%;
  }

  p {
    margin-left: 0.4rem;
    font-size: 0.8rem;
    text-align: left;
    max-width: 15rem;
  }
  .icon {
    margin-left: auto;
    font-size: 1rem;
    color: ${Colors.textColor};
  }

  &:hover {
    background: lightgrey;
  }
`;

export default SkillHeader;
