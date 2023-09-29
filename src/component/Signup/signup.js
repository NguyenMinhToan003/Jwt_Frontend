import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
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
  const [major, setMajor] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [repass, setRepass] = useState("");
  const [objectCheckInput, setObjectCheckInput] = useState({
    email: true,
    password: true,
    major: true,
    repass: true,
    phone: true,
  });

  const handlerCheckInputs = () => {
    setObjectCheckInput({
      email: true,
      password: true,
      major: true,
      repass: true,
    });
    if (!email) {
      setObjectCheckInput({ ...objectCheckInput, email: false });
      toast.error("no email");
      return false;
    }
    if (!password) {
      setObjectCheckInput({ ...objectCheckInput, password: false });
      toast.error("no password");
      return false;
    }
    if (repass !== password) {
      setObjectCheckInput({ ...objectCheckInput, repass: false });
      toast.error("no same password");
      return false;
    }
    if (!major) {
      setObjectCheckInput({ ...objectCheckInput, major: false });
      toast.error("no major");
      return false;
    }
    if (!phone) {
      setObjectCheckInput({ ...objectCheckInput, phone: false });
      toast.error("no phone number");
      return false;
    }

    let regex =
      /^[A-Za-z0-9](([a-zA-Z0-9,=.!-#|$%^&*+/?_`{}~]+)*)@(?:[0-9a-zA-Z-]+.)+[a-zA-Z]{2,9}$/;
    if (!regex.test(email)) {
      toast.error("error form email");
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
        major,
        gender
      );
      let dataServer = statusCreate.data;
      if (+dataServer.EC === 0) {
        toast.success(dataServer.EM);
        history.push("/login");
      } else toast.error(dataServer.EM);
    }
  };
  useEffect(() => {}, []);
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
            className=" form-control  border border-1 px-3 py-3"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
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
            placeholder="Re-Password"
            className={
              objectCheckInput.repass
                ? " form-control  border border-1 px-3 py-3 "
                : " form-control   px-3 py-3 is-invalid"
            }
            onChange={(event) => setRepass(event.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            className=" form-control  border border-1 px-3 py-3"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
          <input
            type="tel"
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
            defaultValue={"DEFAULT"}
            className={
              objectCheckInput.major
                ? " form-select  border border-1 px-3 py-3 "
                : " form-select   px-3 py-3 is-invalid"
            }
            onChange={(event) => {
              setMajor(event.target.value);
            }}>
            <option selected value="DEFAULT" disabled>
              Choose major...
            </option>
            <option value={2}>Leader</option>
            <option value={1}>Developer</option>
            <option value={3}>Guess</option>
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
