import React from "react";
import BioCard from "./BioCard";
import '../Home.css';


const Home = () => {
    return<div className="App">
       <div className="greeting">
            <h2>Hi, I'm Destinee</h2>
       </div>
       <div className="biocard">
            <BioCard />
       </div>
    </div>
};

export default Home;


