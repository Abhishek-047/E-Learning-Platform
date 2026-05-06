import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import SmartPath from "./pages/SmartPath";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      {/* Navbar stays on top of every page, pass theme props */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/smart-path" element={<SmartPath />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/progress" element={<Progress />} />
        {/* New profile route */}
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Footer stays at bottom of every page */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
