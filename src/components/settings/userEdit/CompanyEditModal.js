import _ from 'lodash';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { uploadImage } from '../../../api';
import Logo from '../../shared/Logo';
import defaultProfilePicture from '../../../img/defaultcompany.png';
import TextInput from '../../shared/TextInput';

function CompanyEditModal(props) {
  const [user, setUser] = useState(_.cloneDeep(props.currentUser));
  const [imageUpload, setImageUpload] = useState(false);
  const fileInput = useRef();

  function removeCompany() {
    const tmp = props.currentUser;
    tmp.companies.splice(props.index, 1);
    props.setCurrentUser({ ...props.currentUser, companies: tmp.companies });
    props.onHide();
  }

  function saveCompany() {
    const tmp = props.currentUser;
    props.currentUser.companies[props.index] = user.companies[props.index];
    props.setCurrentUser({ ...props.currentUser, companies: tmp.companies });

    props.onHide();
  }

  async function handleImgChange(event) {
    setImageUpload(true);

    const url = await uploadImage(event.target.files[0]);

    const tmp = user;
    tmp.companies[props.index].logo = url;
    setUser({ ...user, companies: tmp.companies });

    setImageUpload(false);
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Edit Company
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          style={{ display: 'none' }}
          type='file'
          accept='image/*'
          onChange={handleImgChange}
          autoFocus
          ref={(file) => (fileInput.current = file)}
        />

        <Logo
          src={
            user.companies[props.index].logo
              ? user.companies[props.index].logo
              : defaultProfilePicture
          }
          fileInput={fileInput}
          isLoading={imageUpload}
        />

        <TextInput
          placeholder='Name'
          value={user.companies[props.index].name}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].name = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />

        <TextInput
          placeholder='Field'
          required
          value={user.companies[props.index].field}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].field = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />

        <TextInput
          placeholder='Position'
          value={user.companies[props.index].position}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].position = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Website'
          value={user.companies[props.index].website}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].website = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Email'
          value={user.companies[props.index].email}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].email = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Phone Nr.'
          value={user.companies[props.index].phoneNr}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].phoneNr = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Mobile Nr.'
          value={user.companies[props.index].mobileNr}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].mobileNr = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Address'
          value={user.companies[props.index].address}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].address = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Postcode'
          value={user.companies[props.index].postcode}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].postcode = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='City'
          value={user.companies[props.index].city}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].city = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Country'
          value={user.companies[props.index].country}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].country = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />

        <TextInput
          placeholder='Facebook Url'
          value={user.companies[props.index].facebookURL}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].facebookURL = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='Instagram Url'
          value={user.companies[props.index].instagramURL}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].instagramURL = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
        <TextInput
          placeholder='LinkedIn Url'
          value={user.companies[props.index].linkedInURL}
          onChange={(e) => {
            const tmp = user;
            tmp.companies[props.index].linkedInURL = e.target.value;

            setUser({ ...user, companies: tmp.companies });
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={removeCompany}>
          Remove
        </Button>
        <Button onClick={saveCompany}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CompanyEditModal;
