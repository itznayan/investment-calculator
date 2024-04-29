import React from "react";
import investment from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div className="bg-gray-900">
      <div className="w-screen size-28 flex justify-center">
        <img src={investment} alt="logo showing money bag" />
      </div>
      <h1 className="text-lg text-center font-semibold text-white mb-8 p-4 border-b-2 shadow-lg border-gray-700">
        Investment Calculator React & Tailwind
      </h1>
    </div>
  );
}

export default Header;
