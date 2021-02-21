import React from "react";
import logo from "../../assets/images/logo.png";
const MainHeader = () => {
  return (
    <header className="main-header">
      <nav className="sticky top-0 bg-primary shadow-lg text-white shadow-md min-w-full">
        <div className="container py-4 relative">
          <img src={logo} className="mx-auto w-12" alt="logo" />
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
