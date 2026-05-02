// =====================================================
// CourseCard.jsx - Reusable card for displaying a course
// Props: course (object), onViewDetails (function)
// =====================================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }) {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(null);

  // Level badge color changes based on level
  const levelColors = {
    Beginner: "#22c55e",     // green
    Intermediate: "#f59e0b", // yellow/orange
    Advanced: "#ef4444",     // red
  };

  return (
    <div className="course-card">
      {/* Level badge */}
      <div className="card-header-top">
        <span
          className="level-badge"
          style={{ backgroundColor: levelColors[course.level] || "#888" }}
        >
          {course.level}
        </span>
        <div className="card-feedback-btns">
          <button 
            className={`card-feedback-btn ${feedback === "like" ? "liked" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); 
              setFeedback(feedback === "like" ? null : "like");
            }}
            title="Like"
          >
            👍
          </button>
          <button 
            className={`card-feedback-btn ${feedback === "dislike" ? "disliked" : ""}`}
            onClick={(e) => {
              e.stopPropagation(); 
              setFeedback(feedback === "dislike" ? null : "dislike");
            }}
            title="Dislike"
          >
            👎
          </button>
        </div>
      </div>

      {/* Course info */}
      <h3 className="course-title">{course.title}</h3>
      <p className="course-desc">{course.description}</p>

      {/* Duration */}
      <p className="course-duration">⏱ {course.duration}</p>

      {/* Button to view full details */}
      <button
        className="view-btn"
        onClick={() => navigate(`/courses/${course.id}`)}
      >
        View Details →
      </button>
    </div>
  );
}

export default CourseCard;
