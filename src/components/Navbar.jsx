// =====================================================
// Navbar.jsx - Navigation bar component
// Updated: Added Profile link
// =====================================================

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        📚 LearnPath
      </Link>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/smart-path" className={({ isActive }) => (isActive ? "active" : "")}>
            Smart Path
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz" className={({ isActive }) => (isActive ? "active" : "")}>
            Quiz
          </NavLink>
        </li>
        {/* Theme Toggle Button */}
        <li>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>
        {/* Progress is accessible via the Profile page */}
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active profile-link" : "profile-link")}>
            👤 Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
