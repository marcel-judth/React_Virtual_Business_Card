import styled from "styled-components";
import { Colors } from "../../styles/Colors";

function TextInput({ placeholder, value, Icon, required = false, onChange, isPassword = false }) {
  return (
    <InputWrapper>
      <input
        required={required ? "true" : "false"}
        type={isPassword ? "password" : "text"}
        onChange={onChange}
        value={value}
      />
      <label htmlFor="name" className="label-name">
        <span className="content-name">
          <Icon /> {placeholder}
        </span>
      </label>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
  width: 100%;

  span {
    font-size: 1rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    padding-top: 2rem;
    outline: none;
    overflow: visible;
    font-size: 1rem;
    color: ${Colors.textColor};
  }

  label {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    color: gray;
    border-bottom: 1px solid grey;
  }
  label::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid ${Colors.userColor};
    transform: translateX(-100%);
    transition: transform 1s ease-in-out;
  }
  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    color: grey;
  }
  input:focus + .label-name .content-name,
  input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 0.8rem;
  }
  input:focus + .label-name::after,
  .form input:valid + .label-name::after {
    transform: translateX(0%);
  }
`;

export default TextInput;
