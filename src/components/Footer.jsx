// =====================================================
// Footer.jsx - Improved footer with quick links & contact
// =====================================================

import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div className="footer-brand">
          <h3 className="footer-logo">📚 LearnPath</h3>
          <p className="footer-tagline">
            Your smart e-learning platform. Learn at your own pace, track your
            progress, and grow as a developer.
          </p>
        </div>

        {/* Quick Links column */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/smart-path">Smart Path</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📧 learnpath@college.edu</li>
            <li>📍 Computer Science Dept.</li>
            <li>🕐 Mon–Fri, 9am–5pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 LearnPath – Made with ❤️ by Abhishek Panigrahi, Vanisha Vashisth, Anushka Mishra </p>
        <p className="footer-sub">Built with React &amp; React Router</p>
      </div>
    </footer>
  );
}

export default Footer;
