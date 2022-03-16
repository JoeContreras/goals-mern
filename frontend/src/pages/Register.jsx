import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form" onSubmit={onSubmit}>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              id="name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password2"
              className="form-control"
              placeholder="Confirm your password"
              id="password2"
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
