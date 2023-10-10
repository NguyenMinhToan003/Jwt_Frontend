import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState, useRef } from "react";
import "../Signup/signup.scss";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { registerCreateUser } from "../../services/registerService";

const SignUp = () => {
  let history = useHistory();
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

  // use Referen
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
      toast.error("no email");
      emailRef.current.focus();
      return false;
    }
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
    if (!groupId) {
      setObjectCheckInput({ ...objectCheckInput, groupId: false });
      toast.error("no groupId");
      groupIdRef.current.focus();
      return false;
    }
    if (!phone) {
      setObjectCheckInput({ ...objectCheckInput, phone: false });
      toast.error("no phone number");
      phoneRef.current.focus();
      return false;
    }

    let regex =
      /^[A-Za-z0-9](([a-zA-Z0-9,=.!-#|$%^&*+/?_`{}~]+)*)@(?:[0-9a-zA-Z-]+.)+[a-zA-Z]{2,9}$/;
    if (!regex.test(email)) {
      toast.error("error form email");
      emailRef.current.focus();
      return false;
    }
    return true;
  };
  const handlerSubmit = async (event) => {
    event.preventDefault();
    let check = handlerCheckInputs();
    if (check) {
      // toast.success("Nice create account");
      let statusCreate = await registerCreateUser(
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
        history.push("/login");
      } else toast.error(dataServer.EM);
    }
  };

  return (
    <div className="signup-container py-5">
      <div className="container d-flex ">
        <div className="info-signup  col-7 d-none d-md-block  ">
          <h2 className="brand fw-bold my-5 ">Sign Up </h2>
          <span className="d-grid col-8 fs-5 py-5">
            Facebook is an online social media and social networking service
            owned by American technology giant Meta Platforms. Created in 2004
            by Mark Zuckerberg with fellow Harvard College students and
            roommate…
          </span>
          <NavLink to="/login">
            <button
              type="button"
              className="btn btn-success fw-bold px-3 py-2 fs-6">
              Back Login
            </button>
          </NavLink>
        </div>
        <form className="d-flex row col-12 col-md-5 gap-3 form-signup p-5 border border-1 rounded-3">
          <h3 className="fw-bold text-center fs-1 brand">Facebook</h3>
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
            ref={genderRef}
            onKeyDown={(event) => {
              handlerKeyDown(event);
            }}
            className="form-select border border-1 px-3 py-3 "
            onChange={(event) => {
              setGender(event.target.value);
            }}>
            <option value={0}>Male</option>
            <option value={1}>Famale</option>
          </select>

          <select
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
            <option value={2}>Leader</option>
            <option value={1}>Developer</option>
            <option value={4}>Customer</option>
            <option value={3} selected>
              Guest
            </option>
          </select>

          <button
            type="submit"
            className="btn btn-primary px-3 py-3 fw-bold"
            onClick={(event) => handlerSubmit(event)}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
