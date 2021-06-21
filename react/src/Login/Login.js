import { useState } from "react";

import ErrorMessages from './ErrorMessages';
import { login } from "../DAL/api";

function Login({ onLogin, errorMsg }) {

  const [loginData, setLoginData] = useState({
    email: {
      value: '', 
      errors:[], 
      validations:{
        required: true, 
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
      }
    },
    password: {
      value: '', 
      errors: [], 
      validations: {
        required: true, 
        pattern: /^[0-9a-zA-Z]{6}$/g
      }
    }
  })

  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState('');
  
  // const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState('');


  const validateInput = ({target:{value, name}}) => {
    //Clear email error
    const newErrors = [];
    const {validations} = loginData[name];
    
    if(validations.required && !value){
      newErrors.push(`${name} is required`);
    }

    if(validations.pattern && !validations.pattern.test(value)){
      newErrors.push(`Invalid ${name} value`);
    }

    //set the new email input value
    //set the errors
    const state = {
      ...loginData
    };//,
      state[name].value = value;
      state[name].errors = newErrors

      setLoginData(state);
  };

  const checkPassword = (e) => {
    console.log(e.target.name, e.target.value);

    // const regex = /^[0-9a-zA-Z]{6}$/g;
    // if(regex.test(e.target.value)){
    //   setPasswordError('');
    // }else{
    //   setPasswordError('Password should be 6 alphanumeric characters');
    // }
    // setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // onLogin(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
        {errorMsg && <div className="alert alert-danger">
            {errorMsg}
        </div>}
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          defaultValue={loginData.email.value}
          onBlur={validateInput}
        />
        <ErrorMessages errors={loginData.email.errors} />      
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          defaultValue={loginData.password.value}
          onBlur={validateInput}
        />
        <ErrorMessages errors={loginData.password.errors} />      
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
