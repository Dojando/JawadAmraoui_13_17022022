import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const token = localStorage.getItem("bankToken");

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

export const handleFirstNameChange = (e) => ({
  type: "handleFirstNameChange",
  payload: { event: e },
});

export const handleLastNameChange = (e) => ({
  type: "handleLastNameChange",
  payload: { event: e },
});

export const saveEditedName = (e) => ({
  type: "saveEditedName",
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

export const showErrorMessage = (e) => ({
  type: "showErrorMessage",
  payload: { message: e },
});

export const showName = (e) => ({
  type: "showName",
  payload: { event: e  }
});

// reducer

function reducer(state = initialState, action) {
  if (action.type === "saveEditedName") {
    return { ...state, editName: action.payload.editName, editFirstName: action.payload.editFirstName, editLastName: action.payload.editLastName }
  }
  if (action.type === "showName") {
    return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName }
  }
  if (action.type === "showErrorMessage") {
    return { ...state, errorMessage: action.payload.message }
  }
  if (action.type === "editButton") {
    action.payload.event.preventDefault();
    return { ...state, editName: true }
  }
  if (action.type === "cancelButton") {
    action.payload.event.preventDefault();
    return { ...state, editName: false, editFirstName: "", editLastName: "" }
  }
  if (action.type === "handleFirstNameChange") {
    return { ...state, editFirstName: action.payload.event.target.value }
  }
  if (action.type === "handleLastNameChange") {
    return { ...state, editLastName: action.payload.event.target.value }
  }
  if (action.type === "getEmailValue") {
    return { ...state, emailInput: action.payload.event.target.value }
  }
  if (action.type === "getPasswordValue") {
    return { ...state, passwordInput: action.payload.event.target.value }
  }
  return state
}

// Thunk function

export function login(dispatch, getState) {
  fetch(`http://localhost:3001/api/v1/user/login`,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({email: getState().emailInput, password: getState().passwordInput})
  })
  .then((response) => response.json())
  .then((response) => {
    if (response.status === 400) {
      dispatch({ type: 'showErrorMessage', payload: { message: response.message }})
    }
    if (response.status === 200) {
      localStorage.setItem("bankToken", response.body.token)
      window.location.href = "./profile";
    }
  })
}

export function getProfileData(dispatch, getState) {
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
    if (response.status !== 200) {
      window.location.href = "./login";
    }
    if (response.status === 200) {
      dispatch({ type: 'showName', payload: { firstName: response.body.firstName, lastName: response.body.lastName }})
    };
  })
}

export function saveButton(dispatch, getState) {
  fetch(`http://localhost:3001/api/v1/user/profile`,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    method: "PUT",
    body: JSON.stringify({firstName: getState().editFirstName, lastName: getState().editLastName})
  })
  .then((response) => response.json())
  .then((response) => {
    if (response.status === 200) {
      dispatch({ type: 'saveEditedName', payload: { editName: false, editFirstName: "", editLastName: "" }})
      dispatch(getProfileData);
    }
  })
}


export const store = createStore(reducer, applyMiddleware(thunkMiddleware));