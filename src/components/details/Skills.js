import { RiToolsFill } from "react-icons/ri";
import DetailsContentHeading from "./DetailsContentHeading";
import DeatailsContentLine from "./DeatailsContentLine";
import styled from "styled-components";
import { Colors } from "../../styles/Colors";

function Skills({ skills }) {
  return (
    <SkillsWrapper>
      <DetailsContentHeading iconType={RiToolsFill} headingText="Skills" />
      <DeatailsContentLine />

      {skills.map((element, index) => {
        return (
          <Skill key={index}>
            <div className="dot" />
            <p>{element}</p>
          </Skill>
        );
      })}
    </SkillsWrapper>
  );
}

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 1rem;

  .dot {
    min-width: 0.8rem;
    height: 0.8rem;
    background: ${Colors.userColor};
    border-radius: 50%;
  }

  p {
    margin-left: 1rem;
    max-width: 25vw;
  }
`;

const SkillsWrapper = styled.div`
  margin-left: 2rem;

  @media (max-width: 1100px) {
    width: 100%;
    margin-left: 0rem;
    margin-top: 2.55rem;

    p {
      max-width: 100%;
    }
  }
`;

export default Skills;
