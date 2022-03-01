import {React, useState} from "react";
import './username.css';

function Username() {

  const [editName, setEditName] = useState(true);

  const editButton = (e) => {
    e.preventDefault();
    setEditName(true);
  };

  const cancelButton = (e) => {
    e.preventDefault();
    setEditName(false);
  };

  return (
    <div className="header">
      { editName === false ? 
        <div>
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button onClick={editButton} className="edit-button">Edit Name</button>
        </div> :
        <div>
          <h1>Welcome back</h1>
          <form className="edit-container">
            <div className="edit-container-left">
              <input type="text" placeholder="Tony" />
              <button className="edit-button save-button">Save</button>
            </div>
            <div className="edit-container-right">
              <input type="text" placeholder="Jarvis" />
              <button onClick={cancelButton} className="edit-button cancel-button">Cancel</button>
            </div>
          </form>
        </div> }
    </div>
  );
}

export default Username;
