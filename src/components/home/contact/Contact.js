import { BsFileText } from 'react-icons/bs';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import TextInput from '../../shared/TextInput';

function Contact() {
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        const button = document.querySelector('.contact-form-btn');
        button.disabled = true;
        button.innerText = 'Vielen Dank!';
        button.classList.add('btn-sent');
        document.getElementById('contact-form').reset();
        console.log('SUCCESS');
      } else {
        console.log('ERROR', xhr);
      }
    };
    xhr.send(data);
  };

  return (
    <ContactWrapper>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </p>

      <form
        autoComplete='off'
        onSubmit={submitForm}
        action='https://formspree.io/f/mzbklnpk'
        method='POST'
      >
        <TextInput placeholder='Name' Icon={FaUser} required />
        <TextInput placeholder='Email' Icon={FaEnvelope} required />
        <TextInput placeholder='Phone Nr.' Icon={FaPhoneAlt} required />
        <TextInput placeholder='Message' Icon={BsFileText} required />

        <CustomButton onClick={submitForm}>Submit</CustomButton>
      </form>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  padding: 15vh 10vw;

  h2 {
    margin-bottom: 2rem;
  }

  form {
    width: 80vw;
    max-width: 25rem;
    margin-top: 5rem;
  }
`;

export default Contact;
