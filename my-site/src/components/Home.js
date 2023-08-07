import React from "react";
import Projects from "./Projects";
import '../Home.css';


const Home = () => {
    return<div className="App">
       <div className="greeting">
            <h1>Destinee S.</h1>
       </div>
       <div className="intro">
          <h2>Hi, nice to meet you! I'm Destinee. I'm currently learning about web development. I enjoy taking walks, learning Japanese, travelling and messing around with Unity and Blender. Below you can see some of my technical projects!</h2> 
       </div>
       <div className="biocard">
            <Projects />
       </div>
    </div>
};

export default Home;



