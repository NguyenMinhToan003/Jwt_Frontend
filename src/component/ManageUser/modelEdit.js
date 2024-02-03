import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "./user.scss";
import { updateUser } from "../../services/userService";
import Modal from "react-bootstrap/Modal";
const ModelEdit = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [groupId, setGroupId] = useState("");
  const [objectCheckInput, setObjectCheckInput] = useState({
    groupId: true,
  });

  const [useAlert, setUseAlert] = useState(`EDIT`);
  useEffect(() => {
    setEmail(props.user.email);
    setPhone(props.user.phone);
    setAddress(props.user.address);
    setGender(props.user.gender);
    setName(props.user.name);
    setId(props.user.id);
    setGroupId(props.user.groupId);
  }, [props.user]);

  // use referent

  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const genderRef = useRef(null);
  const groupIdRef = useRef(null);

  const handlerKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target === nameRef.current) addressRef.current.focus();
      else if (event.target === addressRef.current) genderRef.current.focus();
      else if (event.target === genderRef.current) groupIdRef.current.focus();
      else if (event.target === groupIdRef.current) handlerSubmit(event);
    }
  };

  // handler data

  const handlerCheckInputs = () => {
    setObjectCheckInput({
      email: true,
      password: true,
      groupId: true,
      repass: true,
    });

    if (!+groupId) {
      setObjectCheckInput({ ...objectCheckInput, groupId: false });
      toast.error("no groupId");
      groupIdRef.current.focus();
      return false;
    }
    return true;
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    let check = handlerCheckInputs();
    if (check) {
      let update = await updateUser(id, name, address, groupId, gender);
      if (update.EC === 0) {
        toast.success(update.EM);
        props.close();
      } else toast.error(update.EM);
    }
  };

  return (
    <>
      {props.show && (
        <Modal show={true} onHide={props.close} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <span>
                Edit Account :
                <span className="fw-bold title"> {props.user.name}</span>
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="fw-bold">
            <form className=" d-flex row  gap-3  p-5 ">
              <input
                value={email}
                type="email"
                placeholder="Email address"
                onKeyDown={(event) => handlerKeyDown(event)}
                className={
                  objectCheckInput.email
                    ? " form-control  border border-1 px-3 py-3 "
                    : " form-control   px-3 py-3 is-invalid"
                }
              />
              <input
                value={name}
                type="text"
                placeholder="Name"
                ref={nameRef}
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                className=" form-control  border border-1 px-3 py-3"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                value={address}
                ref={addressRef}
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                type="text"
                placeholder="Address"
                className=" form-control  border border-1 px-3 py-3"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
              <input
                value={phone}
                type="tel"
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                placeholder="Phone"
                className={
                  objectCheckInput.phone
                    ? " form-control  border border-1 px-3 py-3 "
                    : " form-control   px-3 py-3 is-invalid"
                }
              />
              <select
                defaultValue={"DEFAULT"}
                value={gender}
                ref={genderRef}
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                className="form-select border border-1 px-3 py-3 "
                onChange={(event) => {
                  setGender(event.target.value);
                }}>
                <option selected value="DEFAULT" disabled>
                  Choose gender...
                </option>
                <option value={0}>Male</option>
                <option value={1}>Famale</option>
              </select>

              <select
                value={groupId}
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                ref={groupIdRef}
                className={
                  objectCheckInput.groupId
                    ? " form-select  border border-1 px-3 py-3 "
                    : " form-select   px-3 py-3 is-invalid"
                }
                onChange={(event) => {
                  setGroupId(event.target.value);
                }}>
                <option value={1}>Developer</option>
                <option value={2}>Leader</option>
                <option value={3}>Guest</option>
                <option value={4}>Customer</option>
              </select>

              <button
                type="submit"
                className="btn btn-primary px-3 py-3 fw-bold"
                onClick={(event) => handlerSubmit(event)}>
                Confim Edit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default ModelEdit;
