import {React, useEffect} from "react";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Form from '../components/form/Form';

function Login() {

  // useEffect(() => {
  //   return fetch(`http://localhost:3001/api/v1/user/login`,{
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     method: "POST",
  //     body: JSON.stringify({email: "tony@stark.com", password: "password123"})
  //   })
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  // }, [])

  return (
    <div className="container">
      <Header connected={false}/>
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
