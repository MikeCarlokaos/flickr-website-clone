import React from "react";
import Article from "../../components/layout/jobs/Article";
import Hero from "../../components/layout/jobs/Hero";
import Openings from "../../components/layout/jobs/Openings";
import Footer from "../../components/layout/nav/Footer";
import Navbar from "../../components/layout/nav/Navbar";

const Jobs = () => {
  return (
    <div>
      <header className="fixed inset-0 z-10 w-full h-12">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Article />
        <Openings />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Jobs;
