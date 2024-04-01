import { useEffect } from "react";
import '../css/Home.css'; 

import Landing from '../img/landing.jpg'

// components
import LoginForm from "../components/LoginForm.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  useEffect(() => {
   
  }, []);

  return (
    <div className="home">
      <div className="image-container">
        <img src={Landing} alt="Your Image" />
      </div>
      <div className="login-container">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
