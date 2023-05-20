import React from "react";
import {
 
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer >
      <div>
        <h1>Sandeep singh</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow me</h5>

        <div>
          <a href="https://youtube.com/" target={"blank"}>
          <AiFillGoogleCircle/>
          </a>
          <a href="https://instagram.com/" target={"blank"}>
          <AiFillInstagram />
          </a>
          <a href="https://youtube.com/" target={"blank"}>
          <AiFillYoutube />
          </a>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;
