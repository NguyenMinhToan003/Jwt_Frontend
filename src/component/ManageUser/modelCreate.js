// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState, useRef } from "react";
import "./user.scss";
import { toast } from "react-toastify";
import { createUser } from "../../services/userService";

const ModelCreate = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [groupId, setGroupId] = useState(3);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [repass, setRepass] = useState("");
  const [objectCheckInput, setObjectCheckInput] = useState({
    email: true,
    password: true,
    groupId: true,
    repass: true,
    phone: true,
  });

  // use referent
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const rePasswordRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);
  const groupIdRef = useRef(null);

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
    if (!email) {
      setObjectCheckInput({ ...objectCheckInput, email: false });
      toast.error("Empty is Email");
      emailRef.current.focus();
      return false;
    }
    if (!password) {
      setObjectCheckInput({ ...objectCheckInput, password: false });
      toast.error("Empty is Password");
      passwordRef.current.focus();
      return false;
    }
    if (repass !== password) {
      setObjectCheckInput({ ...objectCheckInput, repass: false });
      toast.error("Password is Not Same");
      rePasswordRef.current.focus();
      return false;
    }
    if (!address) {
      setObjectCheckInput({ ...objectCheckInput, address: false });
      toast.error("Address is Empty");
      addressRef.current.focus();
      return false;
    }
    if (!groupId) {
      setObjectCheckInput({ ...objectCheckInput, groupId: false });
      toast.error("groupId is Empty");
      groupIdRef.current.focus();
      return false;
    }
    if (!phone) {
      setObjectCheckInput({ ...objectCheckInput, phone: false });
      toast.error("Phone number is Empty");
      phoneRef.current.focus();
      return false;
    }

    let regex =
      /^[A-Za-z0-9](([a-zA-Z0-9,=.!-#|$%^&*+/?_`{}~]+)*)@(?:[0-9a-zA-Z-]+.)+[a-zA-Z]{2,9}$/;
    if (!regex.test(email)) {
      toast.error("Form Email is ERORR");
      emailRef.current.focus();
      return false;
    }
    return true;
  };
  const handlerSubmit = async (event) => {
    event.preventDefault();
    let check = handlerCheckInputs();
    if (check) {
      let statusCreate = await createUser(
        email,
        name,
        password,
        address,
        phone,
        groupId,
        gender
      );
      let dataServer = statusCreate;
      if (+dataServer.EC === 0) {
        toast.success(dataServer.EM);
        props.close();
      } else toast.error(dataServer.EM);
    }
  };
  return (
    <>
      {props.show && (
        <Modal show={true} onHide={props.close} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <span className="fw-bold title">Create Account </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="fw-bold">
            <form className=" d-flex row  gap-3  p-5 ">
              <input
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
                // defaultValue={"DEFAULT"}
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
                {/* <option selected value="DEFAULT" disabled>
                  Choose groupId...
                </option> */}
                <option value={1}>Developer</option>
                <option value={2}>Leader</option>
                <option value={3} selected>
                  Guess
                </option>
                <option value={4}>Customer</option>
              </select>

              <button
                type="submit"
                className="btn btn-primary px-3 py-3 fw-bold"
                onClick={(event) => handlerSubmit(event)}>
                Create New Account
              </button>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ModelCreate;
