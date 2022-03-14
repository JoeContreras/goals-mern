import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = () => {};
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form" onSubmit={onSubmit}>
        <form>
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
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
