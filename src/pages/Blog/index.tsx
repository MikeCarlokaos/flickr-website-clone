import React from "react";
import Featured from "../../components/layout/blog/Featured";
import Footer from "../../components/layout/blog/Footer";
import Hero from "../../components/layout/blog/Hero";
import Navbar from "../../components/layout/blog/Navbar";
import PostScript from "../../components/layout/blog/PostScript";
import Snapshot from "../../components/layout/blog/SnapShot";

const Blog = () => {
  return (
    <div>
      <header className="fixed inset-0 z-10 w-full h-12">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Featured />
        <Snapshot />
        <PostScript />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
