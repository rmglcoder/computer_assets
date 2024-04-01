import { useEffect } from "react";
import '../css/Dashboard.css';
import Card from '../components/Card.jsx'; // Import the Card component

// img
import { Create } from '../img/create.png'

// components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  useEffect(() => {
   
  }, []);

  return (
    <div className="home">
      <div>
        <Navbar />
      </div>
      <div>
        <Card />
      </div>
      </div>
  );
};

export default Home;
