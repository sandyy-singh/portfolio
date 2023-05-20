import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import MyNavbar from "./components/MyNavbar";


import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/ContactUs.scss";
import "./styles/mediaquery.scss";
import "./styles/MyNavbar.scss";



function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/ContactUs" element={<ContactUs />} />
  

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
