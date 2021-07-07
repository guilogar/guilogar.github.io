import React from "react";
import Header from '../Header/Header';
import Particles from '../Particles/Particles';

import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../Navbar/Navbar";

import './Home.css';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Header />
      <Particles />
    </React.Fragment>
  );
};

export default Home;
