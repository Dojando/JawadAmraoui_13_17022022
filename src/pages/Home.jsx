import {React} from "react";
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Features from '../components/features/Features';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <div className="container">
      <Header connected={false}/>
      <main>
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
