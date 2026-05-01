// =====================================================
// CourseDetails.jsx - Full Course Detail View
// Updated: YouTube video embed, Mark Lesson Complete button
// =====================================================

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/sampleData";
import "./CourseDetails.css";

function CourseDetails() {
  // Get the course ID from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the course from our data array
  const course = courses.find((c) => c.id === parseInt(id));

  // Track which lessons the user has marked as complete
  // We initialize this from the global localStorage progress
  const [completedLessons, setCompletedLessons] = useState(() => {
    const savedProgress = localStorage.getItem("learnpath_progress");
    const progressObj = savedProgress ? JSON.parse(savedProgress) : {};
    
    // Create a Set of lesson IDs that are marked true for this specific course
    const initialSet = new Set();
    if (course) {
      course.lessons.forEach(lesson => {
        if (progressObj[lesson.id]) {
          initialSet.add(lesson.id);
        }
      });
    }
    return initialSet;
  });

  // Toggle a lesson as complete or incomplete
  function toggleLesson(lessonId) {
    setCompletedLessons((prev) => {
      const updated = new Set(prev); // copy the existing set
      let isDone = false;
      if (updated.has(lessonId)) {
        updated.delete(lessonId); // unmark if already done
        isDone = false;
      } else {
        updated.add(lessonId); // mark as done
        isDone = true;
      }

      // Sync with global localStorage so Progress page sees it
      const savedProgress = localStorage.getItem("learnpath_progress");
      const progressObj = savedProgress ? JSON.parse(savedProgress) : {};
      progressObj[lessonId] = isDone;
      localStorage.setItem("learnpath_progress", JSON.stringify(progressObj));

      return updated;
    });
  }

  // ---- Feature: Personal Scratchpad (Notes) ----
  const [notes, setNotes] = useState(() => {
    // Read specific course notes from local storage
    const savedNotes = localStorage.getItem(`learnpath_notes_${id}`);
    return savedNotes || "";
  });

  // Save notes whenever they change
  useEffect(() => {
    localStorage.setItem(`learnpath_notes_${id}`, notes);
  }, [notes, id]);

  // ---- Feature: Course Rating ----
  const [rating, setRating] = useState(() => {
    const savedRatings = localStorage.getItem("learnpath_ratings");
    const ratingsObj = savedRatings ? JSON.parse(savedRatings) : {};
    return ratingsObj[id] || 0;
  });

  function handleRating(newRating) {
    setRating(newRating);
    // Save to global ratings object in localStorage so Profile can access it
    const savedRatings = localStorage.getItem("learnpath_ratings");
    const ratingsObj = savedRatings ? JSON.parse(savedRatings) : {};
    ratingsObj[id] = newRating;
    localStorage.setItem("learnpath_ratings", JSON.stringify(ratingsObj));
  }

  // If course not found, show error
  if (!course) {
    return (
      <div className="not-found">
        <h2>Course not found!</h2>
        <button onClick={() => navigate("/courses")}>← Back to Courses</button>
      </div>
    );
  }

  // Level badge colors
  const levelColors = {
    Beginner: "#22c55e",
    Intermediate: "#f59e0b",
    Advanced: "#ef4444",
  };

  // Calculate completion percentage for this course
  const totalLessons = course.lessons.length;
  const doneLessons = completedLessons.size;
  const percent = Math.round((doneLessons / totalLessons) * 100);

  return (
    <div className="course-details-page">
      {/* Back button */}
      <button className="back-btn" onClick={() => navigate("/courses")}>
        ← Back to Courses
      </button>

      {/* ---- Course Header ---- */}
      <div className="details-header">
        <span
          className="details-badge"
          style={{ backgroundColor: levelColors[course.level] }}
        >
          {course.level}
        </span>
        <h1 className="details-title">{course.title}</h1>
        <p className="details-desc">{course.description}</p>
        <p className="details-duration">⏱ Duration: {course.duration}</p>
      </div>

      {/* ---- Video and Scratchpad Two-Column Layout ---- */}
      <div className="video-notes-layout">
        {/* ---- YouTube Video Embed ---- */}
        <div className="video-section">
          <h2>🎥 Course Preview Video</h2>
          <div className="video-wrapper">
            {/* We use iframe to embed the YouTube video */}
            {/* allowFullScreen lets users go fullscreen */}
            <iframe
              src={course.video}
              title={`${course.title} - Video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* ---- Personal Scratchpad ---- */}
        <div className="details-section scratchpad-section">
          <h2>📝 Personal Scratchpad</h2>
          <p className="scratchpad-desc">
            Type your notes while watching. They save automatically!
          </p>
          <textarea
            className="scratchpad-input"
            placeholder="e.g., 'React hooks let you use state without writing a class...'"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* ---- Topics Covered ---- */}
      <div className="details-section">
        <h2>📋 Topics Covered</h2>
        <ul className="topics-list">
          {course.topics.map((topic, index) => (
            <li key={index}>✅ {topic}</li>
          ))}
        </ul>
      </div>

      {/* ---- Lessons with Mark Complete ---- */}
      <div className="details-section">
        <div className="lessons-header">
          <h2>📖 Lessons</h2>
          {/* Mini progress for this course */}
          <span className="lessons-progress-text">
            {doneLessons}/{totalLessons} completed
          </span>
        </div>

        {/* Small progress bar */}
        <div className="lessons-progress-bar">
          <div
            className="lessons-progress-fill"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <div className="lessons-list">
          {course.lessons.map((lesson, index) => {
            const isDone = completedLessons.has(lesson.id);

            return (
              <div
                key={lesson.id}
                className={`lesson-item ${isDone ? "lesson-item-done" : ""}`}
              >
                {/* Lesson number circle */}
                <span className={`lesson-number ${isDone ? "lesson-num-done" : ""}`}>
                  {isDone ? "✓" : index + 1}
                </span>

                {/* Lesson title */}
                <span className={`lesson-title ${isDone ? "lesson-title-done" : ""}`}>
                  {lesson.title}
                </span>

                {/* Mark Complete / Undo button */}
                <button
                  className={`mark-btn ${isDone ? "mark-btn-done" : ""}`}
                  onClick={() => toggleLesson(lesson.id)}
                >
                  {isDone ? "✓ Done" : "Mark Complete"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---- Course Rating ---- */}
      <div className="details-section">
        <h2>⭐ Rate This Course</h2>
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "star-filled" : ""}`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
          <span className="rating-text">
            {rating > 0 ? `You rated this ${rating}/5` : "Click to rate"}
          </span>
        </div>
      </div>



      {/* ---- Go to Progress button ---- */}
      <button className="start-btn" onClick={() => navigate("/progress")}>
        📊 View Full Progress Tracker
      </button>
    </div>
  );
}

export default CourseDetails;
