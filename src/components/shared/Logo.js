import { FaEdit } from 'react-icons/fa';
import styled from 'styled-components';

function Logo({
  fileInput,
  src,
  isRounded = false,
  disabled = false,
  isLoading = false,
}) {
  return (
    <LogoContainer>
      <div
        className={isRounded ? 'img-container img-rounded' : 'img-container'}
      >
        {isLoading ? (
          <div class='d-flex justify-content-center'>
            <div class='spinner-border' role='status'>
              <span class='sr-only'></span>
            </div>
          </div>
        ) : (
          <>
            <img className='logo' src={src} alt='company logo' />
            {!disabled && (
              <>
                <div
                  className='overlay'
                  onClick={() => fileInput.current.click()}
                ></div>
                <FaEdit />
              </>
            )}
          </>
        )}
      </div>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  margin-bottom: 2rem;

  .img-container {
    position: relative;
    overflow: hidden;
    width: 10vw;
    cursor: pointer;
    min-width: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
  }

  .img-rounded {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    object-position: center;
    max-height: 10rem;
    max-width: auto !important;
  }
  .logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    background: black;
    opacity: 0.7;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    display: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: white;
    display: none;
    pointer-events: none;
  }

  &:hover {
    svg {
      display: block;
    }
    .overlay {
      display: flex;
    }
  }
`;

export default Logo;
