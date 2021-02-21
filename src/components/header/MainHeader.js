import React from "react";
import logo from "../../assets/images/logo.png";
const MainHeader = () => {
  return (
    <header className="main-header shadow-2xl z-100 relative">
      <nav className="sticky top-0 bg-white text-white border shadow-sm min-w-full">
        <div className="container py-4 relative">
          <img src={logo} className="mx-auto w-12" alt="logo" />
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
