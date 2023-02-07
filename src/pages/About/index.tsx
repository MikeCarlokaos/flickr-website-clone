import React from "react";
import Article from "../../components/layout/about/Article";
import Navbar from "../../components/layout/nav/Navbar";
import Sidebar from "../../components/layout/about/Sidebar";
import Footer from "../../components/layout/nav/Footer";

const About = () => {
  return (
    <div>
      <header className="fixed inset-0 z-10 w-full h-16">
        <Navbar />
      </header>
      <main className="flex flex-col px-6 mt-16 md:divide-x md:flex-row">
        <Sidebar />
        <Article />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
