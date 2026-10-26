import { BrowserRouter, Routes, Route, } from "react-router";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          
          <Route path="/services" element={<Services />} />

          <Route path="/skills" element={<Skills />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
