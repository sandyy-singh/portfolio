import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import vg from "../assets/sandeep_singh.png";

const Header = () => {
  return (
    <nav >

      <div className=" logo">
        <img src={vg} alt="item2" />
      </div>

      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#brands"}>Projects</HashLink>
        <HashLink to={"/#Experience"}>Experience </HashLink>
        <Link to={"/ContactUs"}>Contact</Link>
        
      </main>
    </nav>

  );
};

export default Header;
