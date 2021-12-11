import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

const TextInput = ({
  placeholder,
  value,
  Icon,
  required = false,
  onChange,
  isPassword = false,
  pattern,
  disabled = false,
}) => {
  return (
    <TextInputWrapper>
      <input
        type={isPassword ? 'password' : 'text'}
        className='form__input'
        placeholder=' '
        value={value}
        required={required}
        onChange={onChange}
        disabled={disabled ? 'disabled' : ''}
        title={
          disabled
            ? 'Please upgrade to business license to edit this field'
            : ''
        }
      />
      <label
        htmlFor=''
        className={disabled ? ' form__label disabled' : 'form__label'}
      >
        <Icon />
        {placeholder}
      </label>
    </TextInputWrapper>
  );
};

const TextInputWrapper = styled.div`
  position: relative;
  height: 48px;
  width: 90vw;
  max-width: 25rem;
  margin-bottom: 1.5rem;

  .form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: v1rem;
    border: 1px solid ${Colors.primaryColor};
    border-radius: 0.5rem;
    outline: none;
    padding: 1rem;
    background: none;
    z-index: 1;
  }
  .form__label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    padding: 0 0.25rem;
    background-color: #fff;
    color: ${Colors.textColor};
    font-size: 0.8rem;
    transition: 0.3s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  .form__input:focus + .form__label {
    top: -0.5rem;
    left: 0.8rem;
    color: ${Colors.secondaryColor};
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
  }

  .form__input:not(:placeholder-shown).form__input:not(:focus) + .form__label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    font-weight: 500;
    z-index: 10;
  }

  /*Input focus*/
  .form__input:focus {
    border: 1.5px solid ${Colors.secondaryColor};
  }

  .form__input:disabled {
    border: 1px solid lightgray;
    color: lightgray;
  }

  .disabled {
    color: lightgray;
  }
`;

export default TextInput;
