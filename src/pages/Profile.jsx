// =====================================================
// Profile.jsx - Student Profile Page
// Shows dummy student data: name, email, stats,
//              quiz score, progress, recent activity
// =====================================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentProfile, courses } from "../data/sampleData";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const profile = studentProfile;

  // Calculate progress percentage from dummy data
  const progressPercent = Math.round(
    (profile.lessonsCompleted / profile.totalLessons) * 100
  );

  // Quiz score percentage
  const quizPercent = Math.round(
    (profile.quizScore / profile.quizTotal) * 100
  );

  // Use dummy rated courses since we removed localStorage
  const [ratedCourses] = useState([
    { ...courses[0], userRating: 5 },
    { ...courses[1], userRating: 4 },
  ]);

  return (
    <div className="profile-page">
      {/* ---- Profile Header Card ---- */}
      <div className="profile-hero">
        {/* Avatar with initials */}
        <div className="profile-avatar">{profile.avatar}</div>

        <div className="profile-info">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-email">📧 {profile.email}</p>
          <p className="profile-joined">🗓 Joined {profile.joinDate}</p>

          {/* Level badge */}
          <span className={`profile-level-badge level-${profile.level.toLowerCase()}`}>
            {profile.level === "Beginner" && "🌱 "}
            {profile.level === "Intermediate" && "🔥 "}
            {profile.level === "Advanced" && "🚀 "}
            {profile.level}
          </span>
        </div>
      </div>

      {/* ---- Stats Cards Row ---- */}
      <div className="profile-stats-grid">
        <div className="profile-stat-card">
          <span className="psc-icon">📚</span>
          <span className="psc-number">{profile.enrolledCourses}</span>
          <span className="psc-label">Courses Enrolled</span>
        </div>
        <div className="profile-stat-card">
          <span className="psc-icon">✅</span>
          <span className="psc-number">{profile.lessonsCompleted}</span>
          <span className="psc-label">Lessons Completed</span>
        </div>
        <div className="profile-stat-card">
          <span className="psc-icon">🧠</span>
          <span className="psc-number">
            {profile.quizScore}/{profile.quizTotal}
          </span>
          <span className="psc-label">Quiz Score</span>
        </div>
        <div className="profile-stat-card">
          <span className="psc-icon">🎯</span>
          <span className="psc-number">{progressPercent}%</span>
          <span className="psc-label">Overall Progress</span>
        </div>
      </div>

      {/* ---- Two Column Layout ---- */}
      <div className="profile-layout">
        {/* Left column */}
        <div className="profile-left">

          {/* Progress Section */}
          <div className="profile-card">
            <h2>📊 Learning Progress</h2>
            <div className="profile-progress-row">
              <span className="pp-label">Lessons</span>
              <span className="pp-value">{profile.lessonsCompleted} / {profile.totalLessons}</span>
            </div>
            <div className="profile-bar-track">
              <div
                className="profile-bar-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="pp-percent">{progressPercent}% complete</p>

            {/* Button to go to full progress tracker */}
            <button
              className="go-progress-btn"
              onClick={() => navigate("/progress")}
            >
              📊 View Full Progress Tracker →
            </button>

            {/* Quiz score mini-bar */}
            <div className="profile-progress-row" style={{ marginTop: "20px" }}>
              <span className="pp-label">Quiz Performance</span>
              <span className="pp-value">{profile.quizScore} / {profile.quizTotal}</span>
            </div>
            <div className="profile-bar-track">
              <div
                className="profile-bar-fill profile-bar-green"
                style={{ width: `${quizPercent}%` }}
              ></div>
            </div>
            <p className="pp-percent">{quizPercent}% correct</p>
          </div>

          {/* Currently Enrolled */}
          <div className="profile-card">
            <h2>📖 Enrolled Courses</h2>
            <div className="enrolled-list">
              {/* Show first 4 courses as "enrolled" (dummy) */}
              {courses.slice(0, profile.enrolledCourses).map((course) => (
                <div key={course.id} className="enrolled-item">
                  <span className="enrolled-dot"></span>
                  <div>
                    <p className="enrolled-name">{course.title}</p>
                    <p className="enrolled-level">{course.level} · {course.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Recent Activity */}
        <div className="profile-right">
          <div className="profile-card">
            <h2>🕒 Recent Activity</h2>
            <div className="activity-list">
              {profile.recentActivity.map((item, index) => (
                <div key={index} className="activity-item">
                  {/* Timeline dot */}
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p className="activity-action">
                      <strong>{item.action}:</strong> {item.detail}
                    </p>
                    <p className="activity-time">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About / Info card */}
          <div className="profile-card profile-info-card">
            <h2>👤 About</h2>
            <div className="about-row">
              <span className="about-icon">🎓</span>
              <span>Computer Science Student</span>
            </div>
            <div className="about-row">
              <span className="about-icon">📍</span>
              <span>India</span>
            </div>
            <div className="about-row">
              <span className="about-icon">💻</span>
              <span>Learning Web Development</span>
            </div>
            <div className="about-row">
              <span className="about-icon">🏆</span>
              <span>Goal: Land first dev internship</span>
            </div>
          </div>

          {/* ---- Rated Courses ---- */}
          <div className="profile-card">
            <h2>⭐ Your Rated Courses</h2>
            {ratedCourses.length === 0 ? (
              <p className="no-ratings">You haven't rated any courses yet.</p>
            ) : (
              <div className="rated-list">
                {ratedCourses.map((course) => (
                  <div key={course.id} className="rated-item">
                    <div className="rated-info">
                      <p className="rated-name">{course.title}</p>
                      <p className="rated-stars">
                        {"★".repeat(course.userRating)}
                        {"☆".repeat(5 - course.userRating)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
