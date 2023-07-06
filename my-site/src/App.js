import './App.css';
import {Route, Routes} from "react-router";
import ResponsiveAppBar from "./components/Nav";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Resume" element={<Resume /> }/>
        <Route path="/Projects" element={<Projects /> }/>
        <Route path="/Blog" element={<Blog /> }/>
      </Routes>
    </div>  

    
  );
}

export default App;
