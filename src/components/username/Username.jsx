import {React, useState, useEffect} from "react";
import './username.css';

function Username() {

  const [editName, setEditName] = useState(false);
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  let token = localStorage.getItem("bankToken");

  const handleFirstNameChange = (e) => {
    setEditFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setEditLastName(e.target.value);
  }

  const editButton = (e) => {
    e.preventDefault();
    setEditName(true);
  };

  const cancelButton = (e) => {
    e.preventDefault();
    setEditName(false);
    setEditFirstName("");
    setEditLastName("");
  };

  const saveButton = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/v1/user/profile`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "PUT",
      body: JSON.stringify({firstName: editFirstName, lastName: editLastName})
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        setEditName(false);
        setEditFirstName("");
        setEditLastName("");
        getProfileData();
      }
    })
  };

  const getProfileData = () => {
    fetch(`http://localhost:3001/api/v1/user/profile`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
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
  };

  useEffect(() => {
    getProfileData();
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
              <input className="username-input" type="text" placeholder={firstName} value={editFirstName} onChange={handleFirstNameChange} />
              <button onClick={saveButton} className="edit-button save-button">Save</button>
            </div>
            <div className="edit-container-right">
              <input className="username-input" type="text" placeholder={lastName} value={editLastName} onChange={handleLastNameChange} />
              <button onClick={cancelButton} className="edit-button cancel-button">Cancel</button>
            </div>
          </form>
        </div> }
    </div>
  );
}

export default Username;
