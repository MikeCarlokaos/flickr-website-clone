import React from "react";
import Catalogue from "../../components/layout/help/Catalogue";
import Guide from "../../components/layout/help/Guide";
import Hero from "../../components/layout/help/Hero";
import Navbar from "../../components/layout/help/Navbar";
import Footer from "../../components/layout/nav/Footer";

const Help = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Catalogue />
        <Guide />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Help;
