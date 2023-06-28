import React, { useState } from "react";
import { MenuData } from "./MenuData";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const Navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleHistory = () => {
    Navigate("/");
  };

  return (
    <div className="navbar">
      <h1 className="logo" onClick={handleHistory}>
        KSP
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => (
          <li className={item.cName} key={index}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
