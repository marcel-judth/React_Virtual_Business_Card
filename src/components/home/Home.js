import { Link } from "react-router-dom";
import styled from "styled-components";

import CustomButton from "../shared/CustomButton";
import HomeSvg from "./HomeSvg";

function Home() {
  return (
    <HomeWrapper>
      <Heading>
        <h1>
          Welcome at <br className="heading-line-break" /> X-Act.me!
        </h1>
        <p>
          Lorem ipsum door sit amet, consectetur adip corporis doloribus o d io
          magni quo eos dolo res omnis incidunt vitae praesentium! Ipsum he
        </p>
        <div className="btn-wrapper">
          <Link to="/register">
            <CustomButton>Sign Up</CustomButton>
          </Link>
        </div>
      </Heading>
      <HomeSvg />
    </HomeWrapper>
  );
}

const Heading = styled.div`
  position: absolute;
  width: 40%;
  bottom: 50%;
  transform: translateY(50%);

  .heading-line-break {
    display: none;
  }

  .btn-wrapper {
    margin-top: 2rem;
    width: 10rem;
  }

  p {
    margin-top: 1rem;
    max-width: 40vw;
  }

  @media (max-width: 800px) {
    position: relative;
    width: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: none;
    .heading-line-break {
      display: block;
    }

    p {
      max-width: 100%;
    }
  }
`;

const HomeWrapper = styled.div`
  padding: 15vh 10vw;
  width: 100%;
  min-height: 100vh;

  svg {
    position: absolute;
    right: 0;
    bottom: 50%;

    transform: translateY(50%);
    width: 40vw;
    display: block;
    margin-left: auto;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    /* padding: 15vh 10vh; */

    svg {
      position: relative;
      height: 30vh;
      margin: 0rem;
      margin-bottom: 5vh;
      transform: none;
    }
  }
`;

export default Home;
