import {React} from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Account from '../components/account/Account';
import Username from '../components/username/Username';

function Profile() {

  fetch(`http://localhost:3001/api/v1/user/profile`,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjBjZGZkNDFmMmE0MTg4NDdkMDEyMCIsImlhdCI6MTY0NjY3MjEzNywiZXhwIjoxNjQ2NzU4NTM3fQ.SbufVkHkX5YG0frtnhzOEJ-DGv8rDnJ7FVKcW56is6k' 
    },
    method: "POST",
    body: JSON.stringify({email: "tony@stark.com", password: "passwod123"})
  })
  .then((response) => response.json())
  .then((response) => console.log(response))

  return (
    <div className="container">
      <Header connected={true}/>
      <main className="main bg-dark">
        <Username />
        <h2 className="sr-only">Accounts</h2>
        <Account />
        <Account />
        <Account />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
