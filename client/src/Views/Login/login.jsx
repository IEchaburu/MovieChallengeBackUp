import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../Components/LogIn Validation/validations";
import {  userLogin } from "../../Redux/Actions/User/userActions";

import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.userLogged);
  const [ showPassword, setShowPassword ] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(event.target, "elevent");
    setData({
      ...data,
      [name]: value,
    })
    const newErrors = validateLogin({
      ...data,
      [name]: value,
    })
    setErrors(newErrors)
  };

  const disableByEmptyProps = () => {
    let disabledAux = true
    console.log(errors);
    if (data.email === "" || data.password === "" || errors.email || errors.password) {
      disabledAux = true;
    } else {
      disabledAux = false
    };

    return disabledAux
  };

  const handleSubmit = (ev) => {
    ev.preventDefault()
    
    const body = {
      email: data.email,
      password: data.password
    }

    dispatch(userLogin(body));
    if (userLogged) {
      navigate('/home');
    } else {
      return;
    }
  };


  return (
    <div className="container">
      <div className='col'>
        {/* <div className="col-md-6"></div> */}
        <div className="col">
          {/* <h2 className="fw-bold text-center pt-4">¡Te damos la bienvenida!</h2> */}
          <hr/>
          <h2 className="text-center">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 pt-4">
              <label htmlFor="emailInput" className="form-label">
                <strong>Email</strong>{" "}
              </label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="emailInput"
                placeholder="example@correo.com"
                value={data.email}
                className="form-control"
              />
              <div className="error-container">
                {errors.email ? (
                  <p className="error-text">{errors.email}</p>
                ) : (
                  <p className="error-text"></p>
                )}
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="passwordInput" className="form-label">
                {" "}
                <strong>Password</strong>{" "}
              </label>
              <input
                onChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="form-control"
                id="passwordInput"
                placeholder="Fill with your password"
                value={data.password}
              />
              <a onClick={togglePasswordVisibility} className="eye"> 
                {!showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-fill"></i>} 
              </a>
              <div className="error-container">
                {errors.password ? (
                  <p className="error-text">{errors.password}</p>
                ) : (
                  <p className="error-text"></p>
                )}
              </div>
            </div>

            <div className="d-grid-center">
              <button
                type="submit"
                disabled={disableByEmptyProps()}
                className='btn btn-primary w-50 my-1'
              >
                {" "}
                Log In{" "}
              </button>
            </div>
          </form>

          <div className="container w-100 mt-3 pb-5 text-center">
              <div className="row">
                <p>Haven't got an account yet? 
                  <a
                  className="btn-outline-primary custom-button-height w-100 my-1 btn-lg"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/register")}
                  >
                  {" "}Sign Up Here.{" "}
                  </a>
                </p>
              </div>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  )
};

export default Login;