import React from "react";
import Navbar from "../../components/layout/nav/Navbar";
import Footer from "../../components/layout/nav/Footer";
import Menubar from "../../components/layout/developers/Menubar";
import Article from "../../components/layout/developers/Article";

const Developers = () => {
  return (
    <div>
      <header className="fixed inset-0 z-10 w-full h-16">
        <Navbar />
      </header>
      <main className="w-full h-full">
        <Menubar />
        <Article />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Developers;
