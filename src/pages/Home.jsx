import {React} from "react";
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Features from '../components/features/Features';

function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <Banner />
        <Features />
      </main>
    </div>
  );
}

export default Home;
