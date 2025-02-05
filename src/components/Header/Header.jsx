import React from "react";
import "./Header.css";
import ditteLogoBlue from "../../assets/img/ditteLogoBlue.svg";
import ditteLogoBlack from "../../assets/img/ditteLogoBlack.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="logoDiv">
      {location.pathname === "/" ? (
        <img
          className="ditteLogoBlue"
          src={ditteLogoBlue}
          alt="Ditte Lykke Hansen Logo"
        />
      ) : (
        <img
          className="ditteLogoBlack"
          src={ditteLogoBlack}
          alt="Ditte Lykke Hansen Logo"
        />
      )}
    </div>
  );
};

export default Header;
