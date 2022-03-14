import {React, useEffect} from "react";
import './username.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleFirstNameChange, handleLastNameChange, editButton, cancelButton, saveButton, getProfileData } from "../../store"

function Username() {
  const dispatch = useDispatch();

  const editName = useSelector((state) => state.editName);
  const editFirstName = useSelector((state) => state.editFirstName);
  const editLastName = useSelector((state) => state.editLastName);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  useEffect(() => {
    dispatch(getProfileData)
  }, [])

  return (
    <div className="header">
      { editName === false ? 
        <div>
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          <button onClick={(e) => {dispatch(editButton(e))}} className="edit-button">Edit Name</button>
        </div> :
        <div>
          <h1>Welcome back</h1>
          <form className="edit-container">
            <div className="edit-container-left">
              <input className="username-input" type="text" placeholder={firstName} value={editFirstName} onChange={(e) => {dispatch(handleFirstNameChange(e))}} />
              <button onClick={(e) => {e.preventDefault();dispatch(saveButton)}} className="edit-button save-button">Save</button>
            </div>
            <div className="edit-container-right">
              <input className="username-input" type="text" placeholder={lastName} value={editLastName} onChange={(e) => {dispatch(handleLastNameChange(e))}} />
              <button onClick={(e) => {dispatch(cancelButton(e))}} className="edit-button cancel-button">Cancel</button>
            </div>
          </form>
        </div> }
    </div>
  );
}

export default Username;
