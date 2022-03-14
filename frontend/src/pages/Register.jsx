import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

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
