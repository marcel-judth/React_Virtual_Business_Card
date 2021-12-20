import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function SkillsEditModal(props) {
  const [skill, setSkill] = useState(props.currentUser.skills[props.index]);

  function removeSkill() {
    const tmp = props.currentUser;
    tmp.skills.splice(props.index, 1);
    props.setCurrentUser({ ...props.currentUser, skills: tmp.skills });
    props.onHide();
  }

  function saveSkill() {
    const tmp = props.currentUser;

    props.currentUser.skills[props.index] = skill;

    props.setCurrentUser({ ...props.currentUser, skills: tmp.skills });
    props.onHide();
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Skill</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='mb-2'>Skill Number {props.index + 1}</h4>
        <div class='form-group'>
          <textarea
            class='form-control'
            id='message-text'
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={removeSkill}>
          Remove
        </Button>
        <Button onClick={saveSkill}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SkillsEditModal;
