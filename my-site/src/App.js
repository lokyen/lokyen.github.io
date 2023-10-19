import './App.css';
import {Route, Routes} from "react-router";
import ResponsiveAppBar from "./components/Nav";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kalam"></link>
      <Header></Header>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Resume" element={<Resume /> }/>
        <Route path="/Projects" element={<Projects /> }/>
        <Route path="/Blog" element={<Blog /> }/>
      </Routes>
      <Footer></Footer>
    </div>  

    
  );
}

export default App;
