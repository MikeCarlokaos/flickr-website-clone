import React from "react";
import Hero from "../../components/layout/home/Hero";
import Navbar from "../../components/layout/home/Navbar";
import Footer from "../../components/layout/home/Footer";

const Home = () => {
  return (
    <div className="relative w-full h-full bg-black">
      <header className="fixed inset-0 z-10 w-full h-16">
        <Navbar />
      </header>
      <main className="w-full h-screen">
        <Hero />
      </main>
      <footer className="w-full h-full bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
