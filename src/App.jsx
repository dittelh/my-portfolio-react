import React from "react";
import "./App.css";
import TabBar from "./components/TabBar/TabBar";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Tools from "./components/Tools/Tools";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ProjectsDetails from "./components/Experience/ProjectsDetails/ProjectsDetails";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects-details" element={<ProjectsDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <TabBar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
