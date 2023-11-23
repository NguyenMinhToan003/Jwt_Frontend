import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DeleteRole } from "../../services/permissionService";
import { toast } from "react-toastify";
const ModalDeleteRole = (props) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setId(props.id);
  }, [show, setShow]);
  const handleSubmit = async () => {
    let response = await DeleteRole(id);
    if (response && response.EC == 0) {
      toast.success(response.EM);
      setShow(false);
    } else toast.error(response.EM);
  };
  return (
    <>
      <Button className="btn btn-danger" onClick={handleShow}>
        Delete
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Delete Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>You sure Delete role {props.url}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="btn btn-dark"
            onClick={() => {
              handleSubmit();
            }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteRole;
