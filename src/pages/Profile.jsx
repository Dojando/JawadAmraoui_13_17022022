import {React} from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Account from '../components/account/Account';
import Username from '../components/username/Username';

function Profile() {
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
