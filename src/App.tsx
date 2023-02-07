import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Event from "./components/layout/explore/Event";
import ExplorePage from "./components/layout/explore/ExplorePage";
import Trending from "./components/layout/explore/Trending";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Developers from "./pages/Developers";
import Explore from "./pages/Explore";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Prints from "./pages/Prints";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="developers" element={<Developers />} />
      <Route path="help" element={<Help />} />
      <Route path="explore" element={<Explore />}>
        <Route index element={<ExplorePage />} />
        <Route path="explore-page" element={<ExplorePage />} />
        <Route path="trending" element={<Trending />} />
        <Route path="event" element={<Event />} />
      </Route>
      <Route path="prints" element={<Prints />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
