import React from "react";
import Footer from "../../components/layout/nav/Footer";
import Navbar from "../../components/layout/nav/Navbar";
import MidHero from "../../components/layout/prints/MidHero";
import TopHero from "../../components/layout/prints/TopHero";

const Prints = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <TopHero />
        <MidHero />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Prints;
