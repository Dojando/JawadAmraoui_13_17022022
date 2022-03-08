import {React, useState, useEffect} from "react";
import './username.css';

function Username() {

  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const editButton = (e) => {
    e.preventDefault();
    setEditName(true);
  };

  const cancelButton = (e) => {
    e.preventDefault();
    setEditName(false);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/user/profile`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjBjZGZkNDFmMmE0MTg4NDdkMDEyMCIsImlhdCI6MTY0NjY3MjEzNywiZXhwIjoxNjQ2NzU4NTM3fQ.SbufVkHkX5YG0frtnhzOEJ-DGv8rDnJ7FVKcW56is6k' 
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      if (response.status !== 200) {
        window.location.href = "./login";
      }
      if (response.status === 200) {
        setFirstName(response.body.firstName)
        setLastName(response.body.lastName)
      }
    })
  }, [])

  return (
    <div className="header">
      { editName === false ? 
        <div>
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          <button onClick={editButton} className="edit-button">Edit Name</button>
        </div> :
        <div>
          <h1>Welcome back</h1>
          <form className="edit-container">
            <div className="edit-container-left">
              <input className="username-input" type="text" placeholder="Tony" />
              <button className="edit-button save-button">Save</button>
            </div>
            <div className="edit-container-right">
              <input className="username-input" type="text" placeholder="Jarvis" />
              <button onClick={cancelButton} className="edit-button cancel-button">Cancel</button>
            </div>
          </form>
        </div> }
    </div>
  );
}

export default Username;
