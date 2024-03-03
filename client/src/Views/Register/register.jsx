import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Redux/Actions/User/userActions";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import { validateRegister } from "../../Components/LogIn Validation/validations";
import './Register.css';

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.userLogged);
  const [ input1, setInput1 ] = useState(false);
  const [ input2, setInput2 ] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  
  console.log(userLogged);

  const togglePasswordVisibility1 = () => {
    setInput1(!input1)
  };

  const togglePasswordVisibility2 = () => {
    setInput2(!input2)
  };

  const disableByEmptyProps = () => {
    let disabledAux = true

    if (data.email === "" || data.password === "" || data.passwordConfirmation === "" ||
        errors.email || errors.password || errors.passwordConfirmation) {
      
        disabledAux = true;
    } else {
      disabledAux = false
    };

    return disabledAux
  };

  const handleChange = (event) => {

    const { name, value } = event.target
    setData({...data, [name]:value})
    const newErrors = validateRegister({
        ...data,
        [name]: value,
    })
    setErrors(newErrors);
  };

   

  const register = (ev) => {
    ev.preventDefault();

    const body = {
        email: data.email,
        password: data.password
    };

    dispatch(createUser(body));
    if (userLogged) {
        navigate('/home');
      } else {
        return;
    };

  };
    
  return(
    <div className="container">
        <div className="col-md-6"></div>
        <form onSubmit={register} className="col">
        <h3 className='fw-bold text-center pt-3'>Create new account</h3>
        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Email</strong>
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={data.email}
            placeholder="example@mail.com"
            className="form-control"
          />
          {errors.email ? (
            <p className="error-text">{errors.email}</p>
          ) : (
            <p className="error-text"></p>
          )}
        </div>
        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Password</strong>
          </label>
          <input
            onChange={handleChange}
            type={input1 ? 'text' : 'password'}
            name="password"
            value={data.password}
            placeholder="Password"
            className="form-control"
          />
          <a onClick={togglePasswordVisibility1} className="eye"> 
            {!input1 ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-fill"></i>} 
          </a>
          {errors.password ? (
            <p className="error-text">{errors.password}</p>
          ) : (
            <p className="error-text"></p>
          )}
        </div>
        <div className="mb-4 pt-1">
          <label className="form-label">
            <strong>Confirm password</strong>
          </label>
          <input
            onChange={handleChange}
            type={input2 ? 'text' : 'password'}
            name="passwordConfirmation"
            placeholder="Fill again with your password"
            className="form-control"
          />
            <a onClick={togglePasswordVisibility2} className="eye"> 
            {!input2 ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-fill"></i>} 
          </a>
          {errors.passwordConfirmation ? (
            <p className="error-text">{errors.passwordConfirmation}</p>
          ) : (
            <p className="error-text"></p>
          )}
        </div>
        <div className="container w-100 py-2">
          <div className='row'>
            <div className="col">
                <button type="submit" className='btn btn-primary w-50 my-1' disabled={disableByEmptyProps()}>Registrate</button>
            </div>
          </div>
          <div className="row my-3">
            <div className="col d-flex justify-content-center">
                <p>¿Already registered? 
                  <a 
                    onClick={() => navigate("/login")} 
                    className='btn-outline-primary-custom-button-height-mx-2' 
                  >
                    Log in
                  </a>
                </p>
            </div>
          </div>
        </div>
        </form>
    </div>
  )
};

export default Register;