import {React, useState} from "react";
import './form.css';

function Form() {
  const [errorMessage, setErrorMessage] = useState(null);
  let emailInput = "";
  let passwordInput = "";

  const getEmailValue = (event)=>{
    emailInput = event.target.value;
  };

  const getPasswordValue = (event)=>{
    passwordInput = event.target.value;
  };

  const resetInput = (id) => { 
    document.getElementById(id).reset();
  }

  const handleButtonClicked = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/user/login`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({email: emailInput, password: passwordInput})
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      if (response.status === 400) {
        setErrorMessage(response.message)
        resetInput('email');
        resetInput('password');
      }
      if (response.status === 200) {
        localStorage.setItem("bankToken", response.body.token)
        window.location.href = "./profile";
      }
    })
    // window.location.href = "./profile";
  };

  // {email: "tony@stark.com", password: "password123"}

  return (
    <section className="sign-in-content">
    <i className="fa fa-user-circle sign-in-icon"></i>
    <h1>Sign In</h1>
    <form>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label><input type="text" id="email" onChange={getEmailValue} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label><input type="password" id="password" onChange={getPasswordValue} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
      </div>
      <button onClick={handleButtonClicked} className="sign-in-button">Sign In</button>
      {errorMessage === null ? null : <p className="form-error">{errorMessage}</p>}
    </form>
  </section>
  );
}

export default Form;
