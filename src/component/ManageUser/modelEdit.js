import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "./user.scss";
import { updateUser } from "../../services/userService";
import Modal from "react-bootstrap/Modal";
const ModelEdit = (props) => {
  console.log(props.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [repass, setRepass] = useState("");
  const [id, setId] = useState("");
  const [groupId, setGroupId] = useState("");
  const [objectCheckInput, setObjectCheckInput] = useState({
    email: true,
    password: true,
    major: true,
    repass: true,
    phone: true,
  });
  useEffect(() => {
    setEmail(props.user.email);
    setAddress(props.user.address);
    setPhone(props.user.phone);
    setMajor(props.user.groupId);
    setGender(props.user.gender);
    setName(props.user.name);
    setId(props.user.id);
    setGroupId(props.user.groupId);
  }, [props.user]);

  // use referent
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);
  const majorRef = useRef(null);

  const handlerKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target === emailRef.current) nameRef.current.focus();
      else if (event.target === nameRef.current) passwordRef.current.focus();
      else if (event.target === passwordRef.current)
        rePasswordRef.current.focus();
      else if (event.target === rePasswordRef.current)
        addressRef.current.focus();
      else if (event.target === addressRef.current) phoneRef.current.focus();
      else if (event.target === phoneRef.current) genderRef.current.focus();
      else if (event.target === genderRef.current) majorRef.current.focus();
      else if (event.target === majorRef.current) handlerSubmit(event);
    }
  };

  // handler data

  const handlerCheckInputs = () => {
    setObjectCheckInput({
      email: true,
      password: true,
      major: true,
      repass: true,
    });
    if (!password) {
      setObjectCheckInput({ ...objectCheckInput, password: false });
      toast.error("no password");
      passwordRef.current.focus();
      return false;
    }
    if (repass !== password) {
      setObjectCheckInput({ ...objectCheckInput, repass: false });
      toast.error("no same password");
      rePasswordRef.current.focus();
      return false;
    }
    if (!+major) {
      setObjectCheckInput({ ...objectCheckInput, major: false });
      toast.error("no major");
      majorRef.current.focus();
      return false;
    }
    return true;
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    let check = handlerCheckInputs();
    if (check) {
      let update = await updateUser(
        id,
        email,
        name,
        password,
        address,
        phone,
        major,
        gender
      );
      if (update.data.EC === 0) {
        toast.success(update.data.EM);
        props.close();
      } else toast.error(update.data.EM);
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
                ref={emailRef}
                onKeyDown={(event) => handlerKeyDown(event)}
                className={
                  objectCheckInput.email
                    ? " form-control  border border-1 px-3 py-3 "
                    : " form-control   px-3 py-3 is-invalid"
                }
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
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
                type="password"
                placeholder="Password"
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                ref={passwordRef}
                className={
                  objectCheckInput.password
                    ? " form-control  border border-1 px-3 py-3 "
                    : " form-control   px-3 py-3 is-invalid"
                }
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <input
                type="password"
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                ref={rePasswordRef}
                placeholder="Re-Password"
                className={
                  objectCheckInput.repass
                    ? " form-control  border border-1 px-3 py-3 "
                    : " form-control   px-3 py-3 is-invalid"
                }
                onChange={(event) => setRepass(event.target.value)}
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
                ref={phoneRef}
                onKeyDown={(event) => {
                  handlerKeyDown(event);
                }}
                placeholder="Phone"
                className={
                  objectCheckInput.phone
                    ? " form-control  border border-1 px-3 py-3 "
                    : " form-control   px-3 py-3 is-invalid"
                }
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
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
                ref={majorRef}
                className={
                  objectCheckInput.major
                    ? " form-select  border border-1 px-3 py-3 "
                    : " form-select   px-3 py-3 is-invalid"
                }
                onChange={(event) => {
                  setMajor(event.target.value);
                }}>
                <option value={2}>Leader</option>
                <option value={1}>Developer</option>
                <option value={3}>Guess</option>
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
