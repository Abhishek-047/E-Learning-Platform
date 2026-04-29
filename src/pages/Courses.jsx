// =====================================================
// Courses.jsx - All Courses Page
// Updated: Added search bar + level filter together
// =====================================================

import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/sampleData";
import "./Courses.css";

function Courses() {
  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // State for level filter
  const [selectedLevel, setSelectedLevel] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  // Filter courses by both search query AND level
  // search checks: title, level, description keywords
  const filteredCourses = courses.filter((course) => {
    // Check if course matches the level filter
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;

    // Check if course matches the search query (case-insensitive)
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      course.title.toLowerCase().includes(query) ||
      course.level.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query);

    // Both conditions must be true
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="courses-page">
      {/* Page header */}
      <div className="courses-header">
        <h1>All Courses</h1>
        <p>Browse our courses and start learning at your own pace.</p>
      </div>

      {/* ---- Search + Filter Row ---- */}
      <div className="search-filter-row">
        {/* Search input */}
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search by course name, level, or keyword..."
            value={searchQuery}
            // Update searchQuery state whenever user types
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Show clear button if user has typed something */}
          {searchQuery && (
            <button
              className="search-clear"
              onClick={() => setSearchQuery("")}
            >
              ✕
            </button>
          )}
        </div>

        {/* Level filter pills */}
        <div className="filter-buttons">
          {levels.map((level) => (
            <button
              key={level}
              className={`filter-btn ${selectedLevel === level ? "filter-active" : ""}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* ---- Results count ---- */}
      <p className="courses-count">
        {searchQuery ? (
          <>
            Found <strong>{filteredCourses.length}</strong> result(s) for "
            <em>{searchQuery}</em>"
          </>
        ) : (
          <>
            Showing <strong>{filteredCourses.length}</strong> course(s)
          </>
        )}
      </p>

      {/* ---- Course Cards ---- */}
      {filteredCourses.length > 0 ? (
        <div className="courses-grid-page">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        /* No results message */
        <div className="no-results">
          <p>😕 No courses found.</p>
          <p className="no-results-sub">
            Try a different search term or change the level filter.
          </p>
          <button
            className="btn-outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedLevel("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Courses;
