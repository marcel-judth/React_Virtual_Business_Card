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
    <div class=' mb-2 mt-2'>
      <label className='mb-1 d-block'>{placeholder}</label>
      <input
        type={isPassword ? 'password' : 'text'}
        className='form-control'
        aria-describedby='emailHelp'
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
    </div>
  );
};

export default TextInput;
