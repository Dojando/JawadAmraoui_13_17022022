import {React, useEffect} from "react";
import './username.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleFirstNameChange, handleLastNameChange, editButton, cancelButton, saveButton, getProfileData } from "../../store"

function Username() {
  const dispatch = useDispatch();

  const editName = useSelector((state) => state.editName);
  // const [editName, setEditName] = useState(false);
  const editFirstName = useSelector((state) => state.editFirstName);
  // const [editFirstName, setEditFirstName] = useState("");
  const editLastName = useSelector((state) => state.editLastName);
  // const [editLastName, setEditLastName] = useState("");
  const firstName = useSelector((state) => state.firstName);
  // const [firstName, setFirstName] = useState(null);
  const lastName = useSelector((state) => state.lastName);
  // const [lastName, setLastName] = useState(null);
  
  // let token = localStorage.getItem("bankToken");

  // const handleFirstNameChange = (e) => {
  //   setEditFirstName(e.target.value);
  // }

  // const handleLastNameChange = (e) => {
  //   setEditLastName(e.target.value);
  // }

  // const editButton = (e) => {
  //   e.preventDefault();
  //   setEditName(true);
  // };

  // const cancelButton = (e) => {
  //   e.preventDefault();
  //   setEditName(false);
  //   setEditFirstName("");
  //   setEditLastName("");
  // };

  // const saveButton = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:3001/api/v1/user/profile`,{
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     },
  //     method: "PUT",
  //     body: JSON.stringify({firstName: editFirstName, lastName: editLastName})
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response)
  //     if (response.status === 200) {
  //       setEditName(false);
  //       setEditFirstName("");
  //       setEditLastName("");
  //       getProfileData();
  //     }
  //   })
  // };

  // const getProfileData = () => {
  //   fetch(`http://localhost:3001/api/v1/user/profile`,{
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}` 
  //     },
  //     method: "POST"
  //   })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response)
  //     if (response.status !== 200) {
  //       window.location.href = "./login";
  //     }
  //     if (response.status === 200) {
  //       setFirstName(response.body.firstName)
  //       setLastName(response.body.lastName)
  //     }
  //   })
  // };

  useEffect(() => {
    dispatch(getProfileData())
    // getProfileData();
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
              <button onClick={(e) => {dispatch(saveButton(e))}} className="edit-button save-button">Save</button>
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
