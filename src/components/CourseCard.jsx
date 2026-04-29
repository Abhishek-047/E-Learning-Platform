// =====================================================
// CourseCard.jsx - Reusable card for displaying a course
// Props: course (object), onViewDetails (function)
// =====================================================

import { useNavigate } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }) {
  const navigate = useNavigate();

  // Level badge color changes based on level
  const levelColors = {
    Beginner: "#22c55e",     // green
    Intermediate: "#f59e0b", // yellow/orange
    Advanced: "#ef4444",     // red
  };

  return (
    <div className="course-card">
      {/* Level badge */}
      <span
        className="level-badge"
        style={{ backgroundColor: levelColors[course.level] || "#888" }}
      >
        {course.level}
      </span>

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
