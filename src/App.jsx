import React from 'react';
import './App.css';
import TabBar from './components/TabBar/TabBar';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Tools from './components/Tools/Tools';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ToolsDetails from './components/Tools/ToolsDetails/ToolsDetails';
import ProjectsDetails from './components/Projects/ProjectsDetails/ProjectsDetails';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools-details" element={<ToolsDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-details" element={<ProjectsDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <TabBar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
