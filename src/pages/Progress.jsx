// =====================================================
// Progress.jsx - Improved Progress Tracker Page
// Updated: Shows completed lessons list, remaining lessons,
//          better progress bar with percentage
// =====================================================

import { useState, useEffect } from "react";
import { courses } from "../data/sampleData";
import "./Progress.css";

function Progress() {
  // Build initial progress state: load from localStorage if exists, else default to all false
  function buildInitialProgress() {
    const savedProgress = localStorage.getItem("learnpath_progress");
    if (savedProgress) {
      return JSON.parse(savedProgress);
    }
    
    const progress = {};
    courses.forEach((course) => {
      course.lessons.forEach((lesson) => {
        progress[lesson.id] = false;
      });
    });
    return progress;
  }

  const [completed, setCompleted] = useState(buildInitialProgress);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("learnpath_progress", JSON.stringify(completed));
  }, [completed]);

  // Toggle a lesson between done / not done
  function toggleLesson(lessonId) {
    setCompleted((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  }

  // Calculate overall stats
  const totalLessons = Object.keys(completed).length;
  const doneLessons = Object.values(completed).filter((v) => v).length;
  const remainingLessons = totalLessons - doneLessons;
  const progressPercent = Math.round((doneLessons / totalLessons) * 100);

  // Build a flat list of all completed lesson titles (for the summary section)
  const completedList = [];
  courses.forEach((course) => {
    course.lessons.forEach((lesson) => {
      if (completed[lesson.id]) {
        completedList.push({ courseName: course.title, lessonTitle: lesson.title });
      }
    });
  });

  return (
    <div className="progress-page">
      {/* Page Header */}
      <div className="progress-header">
        <h1>📊 My Progress Tracker</h1>
        <p>Check off lessons as you complete them and watch your progress grow!</p>
      </div>

      {/* ---- Overall Stats Cards ---- */}
      <div className="progress-stats-row">
        <div className="p-stat-card p-stat-blue">
          <span className="p-stat-icon">✅</span>
          <span className="p-stat-num">{doneLessons}</span>
          <span className="p-stat-label">Lessons Done</span>
        </div>
        <div className="p-stat-card p-stat-orange">
          <span className="p-stat-icon">📋</span>
          <span className="p-stat-num">{remainingLessons}</span>
          <span className="p-stat-label">Remaining</span>
        </div>
        <div className="p-stat-card p-stat-purple">
          <span className="p-stat-icon">🎯</span>
          <span className="p-stat-num">{progressPercent}%</span>
          <span className="p-stat-label">Complete</span>
        </div>
        <div className="p-stat-card p-stat-green">
          <span className="p-stat-icon">📚</span>
          <span className="p-stat-num">{totalLessons}</span>
          <span className="p-stat-label">Total Lessons</span>
        </div>
      </div>

      {/* ---- Overall Progress Bar ---- */}
      <div className="overall-progress">
        <div className="overall-progress-top">
          <span className="overall-percent">{progressPercent}% Complete</span>
          <span className="overall-count">{doneLessons} / {totalLessons} lessons</span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        {/* Motivational message */}
        <p className="progress-motivation">
          {progressPercent === 0
            ? "🚀 Start checking off lessons to track your journey!"
            : progressPercent === 100
            ? "🎉 You've completed everything! You are a legend!"
            : progressPercent >= 75
            ? "🔥 Almost there! Keep pushing!"
            : progressPercent >= 50
            ? "💪 You're halfway done! Great work!"
            : "👏 Good start! Keep the momentum going!"}
        </p>
      </div>

      {/* ---- Two-column layout: Completed | Course Checklist ---- */}
      <div className="progress-layout">

        {/* Left: Completed Lessons Summary */}
        <div className="completed-summary">
          <h2>✅ Completed Lessons ({doneLessons})</h2>
          {completedList.length === 0 ? (
            <p className="empty-msg">No lessons completed yet. Start checking off lessons below!</p>
          ) : (
            <ul className="completed-list">
              {completedList.map((item, index) => (
                <li key={index} className="completed-item">
                  <span className="completed-check">✓</span>
                  <div>
                    <p className="completed-lesson-title">{item.lessonTitle}</p>
                    <p className="completed-course-name">{item.courseName}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right: Course-by-course checklist */}
        <div className="course-checklist-col">
          <h2>📖 All Lessons</h2>
          {courses.map((course) => {
            const courseDone = course.lessons.filter((l) => completed[l.id]).length;
            const courseTotal = course.lessons.length;
            const coursePercent = Math.round((courseDone / courseTotal) * 100);

            return (
              <div key={course.id} className="course-progress-block">
                {/* Course name + mini progress */}
                <div className="course-progress-header">
                  <h3>{course.title}</h3>
                  <span className="course-mini-badge">{coursePercent}%</span>
                </div>

                {/* Mini progress bar for this course */}
                <div className="mini-bar-track">
                  <div
                    className="mini-bar-fill"
                    style={{ width: `${coursePercent}%` }}
                  ></div>
                </div>

                {/* Lesson items */}
                <div className="lesson-checklist">
                  {course.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`lesson-check-item ${completed[lesson.id] ? "lesson-done" : ""}`}
                      onClick={() => toggleLesson(lesson.id)}
                    >
                      {/* Custom checkbox */}
                      <div className={`check-box ${completed[lesson.id] ? "checked" : ""}`}>
                        {completed[lesson.id] && "✓"}
                      </div>
                      <span className="lesson-check-title">{lesson.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Progress;
