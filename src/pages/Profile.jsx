import {React} from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Account from '../components/account/Account';

function Profile() {
  return (
    <div className="container">
      <Header connected={true}/>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
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
