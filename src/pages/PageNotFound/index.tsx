import React from "react";
import Footer from "../../components/layout/nav/Footer";
import Navbar from "../../components/layout/nav/Navbar";

const PageNotFound = () => {
  return (
    <div>
      <header className="fixed inset-0 z-10 w-full h-12">
        <Navbar />
      </header>
      <main>
        <section className="w-full h-screen flex items-center justify-center">
          <div>
            <h1 className="text-5xl font-semibold capitalize">
              page not found
            </h1>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PageNotFound;
