import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import vg from "../assets/11.png";
import vg2 from "../assets/exp1.png";
import img1 from "../assets/i1.jpg";
import img2 from "../assets/i2.jpg";
import img3 from "../assets/i3.jpg";
import img4 from "../assets/i4.jpg";
import img5 from "../assets/i5.jpg";
import img6 from "../assets/i6.jpg";

import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  const navigatation1 = useNavigate();

  let photo = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];

  return (
    <Fragment>
      <div className="home" id="home">
        <main>
          <h1>web Developer </h1>

          <p>
            I have completed B Tech from RGPV university Bhopal in 2016. I have
            done 1 year 6 months training in web development and now I am doing
            Internship from dream krishi.co (Aigroedge Technologies) as a a
            “Full stack web Developer Intern”Creating web and mobile
            applications, Maintaining, optimizing, troubleshooting, and
            improving websites. Implementation of apps and landing pages from
            concept through deployment.
            <button onClick={() => navigatation1("/ContactUs")}>
              Contact us
            </button>
          </p>
        </main>
      </div>

  
     
        <div className="gallery" id="Gallery">
          {photo.map((item, ind) => {
            return (
              <img src={item.imgSrc} key={ind} className="img11" alt={ind} />
            );
          })}
        </div>
  

      <div className="home2">
        <div>
          <div>
            <h1>About me</h1>
            <p>
              I am sandeep singh and I have completed BTech from RGPV university
              Bhopal in 2016. I have done 1 year 6 training in front end web
              development and now I am training to React JS from Aigroedge
              Technologies as a “Full stack web Developer Intern”
            </p>
          </div>
          <img src={vg} alt="Graphics" />
        </div>
      </div>

      <div className="home3" id="Experience">
        <div>
          <div>
            <img src={vg2} alt="Graphics" />
          </div>
          <div>
            <h1>Experience</h1>

            <p>
              Implemented websites, mobile applications, and landing pages from
              concept through deployment. Standardized all output with a new,
              responsive, mobile-first approach and strategy.
            </p>

            <p>
              Meticulous web developer with over 1.5 years of front end
              experience and passion for responsive website design and a firm
              believer in the mobile-first approach. W3C certified. Implemented
              new responsive website approach which increased mobile traffic by
              20%.
            </p>
          </div>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Projects</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>instagram</p>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
