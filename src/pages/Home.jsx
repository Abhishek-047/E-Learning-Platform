// =====================================================
// Home.jsx - Redesigned Landing Page
// Improvements: Better hero, stats row, testimonials,
//               improved "Why Choose Us" section
// =====================================================

import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses, testimonials } from "../data/sampleData";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // Show first 3 courses as featured
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="home">

      {/* ===================== HERO SECTION ===================== */}
      <section className="hero">
        <div className="hero-content">
          {/* Small badge above heading */}
          <span className="hero-badge">🎓 Free E-Learning Platform</span>

          <h1 className="hero-title">
            Start Your Developer
            <span className="hero-highlight"> Journey Today</span>
          </h1>

          <p className="hero-subtitle">
            LearnPath is your smart study companion. Explore beginner-friendly
            courses, follow a personalized learning path, take quizzes, and
            track your progress — all for free.
          </p>

          {/* CTA buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/courses")}
            >
              🚀 Explore Courses
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/smart-path")}
            >
              🧭 Find My Path
            </button>
          </div>
        </div>

        {/* Right side visual card */}
        <div className="hero-visual">
          <div className="hero-card">
            <p className="hero-card-icon">📖</p>
            <p className="hero-card-title">Start your dev journey today</p>
            <p className="hero-card-path">HTML → CSS → JS → React</p>
            <div className="hero-card-tags">
              <span>Beginner</span>
              <span>Free</span>
              <span>Self-paced</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS SECTION ===================== */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-num">8+</span>
            <span className="stat-label">Courses</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">500+</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">8</span>
            <span className="stat-label">Quiz Questions</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">3</span>
            <span className="stat-label">Skill Levels</span>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED COURSES ===================== */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">📚 Featured Courses</h2>
          <p className="section-subtitle">
            Start with these popular courses, picked especially for beginners.
          </p>
        </div>

        <div className="courses-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="view-all-wrapper">
          <button className="btn-outline" onClick={() => navigate("/courses")}>
            View All Courses →
          </button>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="why-section">
        <div className="section-header">
          <h2 className="section-title">🌟 Why Choose LearnPath?</h2>
          <p className="section-subtitle">
            Everything a CS student needs to start their coding journey.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🕐</span>
            <h3>Learn at Your Pace</h3>
            <p>
              No deadlines, no pressure. Study whenever you want, as fast or
              slow as you need.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🗺️</span>
            <h3>Smart Study Path</h3>
            <p>
              Not sure where to start? Pick your level and we'll build a
              personalized roadmap for you.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">✅</span>
            <h3>Track Your Progress</h3>
            <p>
              Mark lessons complete and watch your progress bar grow. Stay
              motivated every day!
            </p>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">💬 What Students Say</h2>
          <p className="section-subtitle">
            Real reviews from students just like you.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              {/* Stars */}
              <div className="testimonial-stars">
                {"⭐".repeat(t.rating)}
              </div>

              {/* Review text */}
              <p className="testimonial-text">"{t.review}"</p>

              {/* Student info */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="cta-banner">
        <h2>Ready to start learning? 🚀</h2>
        <p>Join hundreds of students already learning on LearnPath.</p>
        <button className="btn-primary" onClick={() => navigate("/courses")}>
          Get Started — It's Free!
        </button>
      </section>

    </div>
  );
}

export default Home;
