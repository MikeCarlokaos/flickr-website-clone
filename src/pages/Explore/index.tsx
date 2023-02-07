import React from "react";
import Menubar from "../../components/layout/explore/Menubar";
import Footer from "../../components/layout/nav/Footer";
import Navbar from "../../components/layout/nav/Navbar";

const Explore = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Menubar />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Explore;
