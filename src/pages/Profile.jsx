import {React} from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Form from '../components/form/Form';

function Profile() {
  return (
    <div className="container">
      <Header connected={true}/>
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
