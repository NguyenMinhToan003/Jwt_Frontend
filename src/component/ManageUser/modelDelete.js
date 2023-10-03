import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./user.scss";
const ModeDelete = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete <span className="higthligh fw-bold">{props.user.name} </span>
            ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="fw-bold">
          Woohoo,are you sure delete !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary fw-bold" onClick={props.comfimDelete}>
            Delete !
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModeDelete;
