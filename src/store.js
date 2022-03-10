import { createStore } from 'redux';

// state
const initialState = {
  errorMessage: null,
  emailInput: "",
  passwordInput: "",
  editName: false,
  editFirstName: "",
  editLastName: "",
  firstName: null,
  lastName: null,
};

// actions creators

export const getProfileData = () => ({
  type: "getProfileData",
});

export const handleButtonClicked = (e) => ({
  type: "handleButtonClicked",
  payload: { event: e },
});

export const handleFirstNameChange = (e) => ({
  type: "handleFirstNameChange",
  payload: { event: e },
});

export const handleLastNameChange = (e) => ({
  type: "handleLastNameChange",
  payload: { event: e },
});

export const saveButton = (e) => ({
  type: "saveButton",
  payload: { event: e },
});

export const editButton = (e) => ({
  type: "editButton",
  payload: { event: e },
});

export const cancelButton = (e) => ({
  type: "cancelButton",
  payload: { event: e },
});

export const getEmailValue = (e) => ({
  type: "getEmailValue",
  payload: { event: e },
});

export const getPasswordValue = (e) => ({
  type: "getPasswordValue",
  payload: { event: e },
});

// reducer

function reducer(state = initialState, action) {
  if (action.type === "editButton") {
    console.log(action.payload)
    action.payload.event.preventDefault();
    return { ...state, editName: true }
  }
  if (action.type === "cancelButton") {
    console.log(action.payload)
    action.payload.event.preventDefault();
    return { ...state, editName: false, editFirstName: "", editLastName: "" }
  }
  if (action.type === "handleFirstNameChange") {
    console.log(action.payload)
    return { ...state, editFirstName: action.payload.event.target.value }
  }
  if (action.type === "handleLastNameChange") {
    console.log(action.payload)
    return { ...state, editLastName: action.payload.event.target.value }
  }
  if (action.type === "getEmailValue") {
    console.log(action.payload)
    return { ...state, emailInput: action.payload.event.target.value }
  }
  if (action.type === "getPasswordValue") {
    return { ...state, passwordInput: action.payload.event.target.value }
  }
  if (action.type === "getProfileData") {
    const token = localStorage.getItem("bankToken");
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
        return { ...state, firstName: response.body.firstName, lastName: response.body.lastName}
      }
    })
  }
  if (action.type === "saveButton") {
    console.log(action.payload)
    action.payload.event.preventDefault();
    const token = localStorage.getItem("bankToken");
    fetch(`http://localhost:3001/api/v1/user/profile`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      method: "PUT",
      body: JSON.stringify({firstName: state.editFirstName, lastName: state.editLastName})
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        return { ...state, editName: false, editFirstName: "", editLastName: "", }
        // getProfileData();
      }
    })
    
  }
  if (action.type === "handleButtonClicked") {
    action.payload.event.preventDefault();
    fetch(`http://localhost:3001/api/v1/user/login`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({email: state.emailInput, password: state.passwordInput})
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      if (response.status === 400) {
        return { ...state, errorMessage: response.message };
      }
      if (response.status === 200) {
        localStorage.setItem("bankToken", response.body.token)
        window.location.href = "./profile";
      }
    })
  }
  return state
}

export const store = createStore(reducer);