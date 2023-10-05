// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./user.scss";
const ModelAlert = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.close} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.use === `DELETE` && <span>Delete </span>}
            {props.use === `EDIT` && <span>Edit </span>}
            <span className="higthligh fw-bold">{props.user.name} </span>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="fw-bold">
          {props.use === `DELETE` && <span> Woohoo,are you sure delete !</span>}
          {props.use === `EDIT` && <span> Woohoo, Confim Edit </span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary fw-bold" onClick={props.comfimDelete}>
            {props.use === `DELETE` && <span>Delete !</span>}
            {props.use === `EDIT` && <span>Edit !</span>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelAlert;
