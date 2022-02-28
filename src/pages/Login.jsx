import {React} from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Form from '../components/form/Form';

function Login() {
  return (
    <div className="container">
      <Header />
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
