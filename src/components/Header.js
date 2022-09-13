import React from "react";
import display from "../img/display.jpg";

function Header() {
  return (
    <header>
      <img src={display} />
      <div className="name">
        <h1>Bharvi Sampat</h1>
        <h4>React Developer</h4>
        <p>bharvisampat.netlify.app</p>
      </div>
      <div className="button">
        <button className="email">
          <i class="fa-solid fa-envelope"></i>Email
        </button>
        <button className="linkedin">
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </header>
  );
}

export default Header;
