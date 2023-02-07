import React from "react";
import LoginForm from "../../components/layout/login/LoginForm";
import bgLogin from "../../assets/images/login/login-bg.jpg";
import SignupNavbar from "../../components/layout/nav/SignupNavbar";

const Login = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${bgLogin})` }}
      className="relative w-full h-screen bg-black"
    >
      <header className="fixed top-0 left-0 right-0 z-10">
        <SignupNavbar />
      </header>
      <main className="relative w-full h-full">
        <div>
          <img
            src={bgLogin}
            alt="login background"
            className="w-full h-screen object-bottom"
          />
        </div>
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[350px]">
          <LoginForm />
        </div>
      </main>
    </div>
  );
};

export default Login;
