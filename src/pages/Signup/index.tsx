import React from "react";
import SignupForm from "../../components/layout/signup/SignupForm";
import bgLogin from "../../assets/images/login/login-bg.jpg";
import SignupNavbar from "../../components/layout/nav/SignupNavbar";

const Signup = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgLogin})` }}
      className="relative w-full h-screen bg-black bg-[length:100%_100vh] bg-no-repeat bg-fixed overflow-hidden"
    >
      <header className="fixed top-0 left-0 right-0 z-10">
        <SignupNavbar />
      </header>
      <main className="w-full h-full">
        {/* <div>
          <img
            src={bgLogin}
            alt="login background"
            className=" w-full h-screen object-bottom"
          />
        </div> */}
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[580px] flex items-center justify-center mt-3">
          <SignupForm />
        </div>
      </main>
    </div>
  );
};

export default Signup;
