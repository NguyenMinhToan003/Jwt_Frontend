import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UpdateRole, DeleteRole } from "../../services/permissionService";
import { toast } from "react-toastify";
const ModalEditRole = (props) => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    setUrl(props.url);
    setDescription(props.description);
    setRole({ id: props.id, url: url, description: description });
  }, [show, setShow]);
  useEffect(() => {
    setRole({ id: props.id, url: url, description: description });
  }, [url, setUrl, description, setDescription]);

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleSubmit = async () => {
    let response = await UpdateRole(role);
    if (response && response.EC == 0) {
      toast.success(response.EM);
      setShow(false);
    } else {
      toast.error(response.EM);
    }
  };

  return (
    <>
      <Button className="btn btn-dark" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Edit Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>url</Form.Label>
              <Form.Control
                placeholder="/example"
                autoFocus
                value={url}
                onChange={(event) => {
                  handleChangeUrl(event);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => {
                  handleChangeDescription(event);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-success" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditRole;
