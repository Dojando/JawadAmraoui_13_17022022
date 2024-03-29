import {React} from "react";
import './form.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getEmailValue } from "../../store"
import { getPasswordValue } from "../../store"
import { login } from "../../store"

function Form() {
  const dispatch = useDispatch();

  const errorMessage = useSelector((state) => state.errorMessage);

  return (
    <section className="sign-in-content">
    <i className="fa fa-user-circle sign-in-icon"></i>
    <h1>Sign In</h1>
    <form>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label><input type="text" id="email" onChange={(e) => {dispatch(getEmailValue(e))}} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label><input type="password" id="password" onChange={(e) => {dispatch(getPasswordValue(e))}} />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
      </div>
      <button onClick={(e) => {e.preventDefault();dispatch(login)}} className="sign-in-button">Sign In</button>
      {errorMessage == null ? null : <p className="form-error">{errorMessage}</p>}
    </form>
  </section>
  );
}

export default Form;
