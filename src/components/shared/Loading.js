import styled from "styled-components";

function Loading() {
  return (
    <LoadingWrapper>
      <lottie-player
        className="loading"
        src="https://assets6.lottiefiles.com/packages/lf20_slv159gh.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  width: 20rem;
  height: auto;
  max-width: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Loading;
