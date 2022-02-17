import {React} from "react";
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner'

function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}

export default Home;
