import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModeDelete = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title> Delete {props.user.name}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo,are you sure delete !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={props.comfimDelete}>
            Delete !
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModeDelete;
