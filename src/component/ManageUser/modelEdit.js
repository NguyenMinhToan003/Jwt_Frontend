import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./user.scss";
import { updateUser, createUser } from "../../services/userService";
const ModelEdit = (props) => {
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(props.user.address);
  const [phone, setPhone] = useState(props.user.phone);
  const [major, setMajor] = useState(props.user.major);
  const [gender, setGender] = useState(props.user.gender);
  const [name, setName] = useState(props.user.name);
  const [repass, setRepass] = useState(props.user.repass);
  const [id, setId] = useState(props.user.id);
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
    setMajor(props.user.major);
    setGender(props.user.gender);
    setName(props.user.name);
    setId(props.user.id);
  }, [props.user]);

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
  const handlerOnClose = (event) => {
    event.preventDefault();
    props.close();
  };
  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  //   };
  return (
    <>
      {props.show ? (
        <div className="modelCreateAccount position-fixed top-0 start-0 bottom-0 end-0">
          <div className="position-fixed top-50 start-50 translate-middle">
            <div className="container d-flex align-item-center justify-content-center ">
              <form className=" d-flex row col-12 gap-3 form-signup p-5 border border-1 rounded-3">
                <span className="d-flex justify-content-end">
                  <button
                    className="btn btn-danger fw-bold"
                    onClick={(event) => {
                      handlerOnClose(event);
                    }}>
                    Close
                  </button>
                </span>
                <h3 className="fw-bold text-center fs-1 brand">Facebook</h3>
                <input
                  value={email}
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
                  value={name}
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
                  value={address}
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
                  Edit Account
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default ModelEdit;
