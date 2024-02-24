import './App.css';
import Navbar from "./Project/Navbar";
import Slider from "./Project/Slider";
import Data from "./Project/Data";
import About from "./Project/About";
import Details from "./Project/Details"
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Slider /> <Data /> </>} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;