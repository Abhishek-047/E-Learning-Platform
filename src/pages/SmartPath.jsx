// =====================================================
// SmartPath.jsx - Smart Study Path Page (Unique Feature)
// User picks their level, and we show the best learning path
// =====================================================

import { useState } from "react";
import { studyPaths } from "../data/sampleData";
import "./SmartPath.css";

function SmartPath() {
  // Track which level the user selected
  // null means nothing selected yet
  const [selectedLevel, setSelectedLevel] = useState(null);

  // The three levels available
  const levels = ["Beginner", "Intermediate", "Advanced"];

  // Get the path data for the selected level
  const pathData = selectedLevel ? studyPaths[selectedLevel] : null;

  return (
    <div className="smartpath-page">
      {/* Page header */}
      <div className="smartpath-header">
        <h1>🧭 Smart Study Path</h1>
        <p>
          Not sure where to start? Just tell us your skill level and we'll show
          you the best path to follow!
        </p>
      </div>

      {/* ---- Level Selection ---- */}
      <div className="level-selector">
        <h2>What's your current level?</h2>
        <div className="level-buttons">
          {levels.map((level) => (
            <button
              key={level}
              className={`level-btn ${selectedLevel === level ? "level-selected" : ""}`}
              onClick={() => setSelectedLevel(level)}
            >
              {level === "Beginner" && "🌱 "}
              {level === "Intermediate" && "🔥 "}
              {level === "Advanced" && "🚀 "}
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* ---- If no level selected yet ---- */}
      {!selectedLevel && (
        <div className="path-placeholder">
          <p>👆 Select a level above to see your personalized study path!</p>
        </div>
      )}

      {/* ---- Show the path when a level is selected ---- */}
      {pathData && (
        <div className="path-result">
          <div className="path-result-header">
            <h2>Your {selectedLevel} Learning Path</h2>
            <p>{pathData.description}</p>
          </div>

          {/* Step-by-step path with arrows */}
          <div className="path-steps">
            {pathData.steps.map((step, index) => (
              <div key={index} className="step-wrapper">
                {/* Step Card */}
                <div className="step-card">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-info">
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                  <div className="step-number">Step {index + 1}</div>
                </div>

                {/* Arrow between steps (not shown after last step) */}
                {index < pathData.steps.length - 1 && (
                  <div className="step-arrow">↓</div>
                )}
              </div>
            ))}
          </div>

          {/* Motivational message */}
          <div className="path-tip">
            💡 <strong>Tip:</strong> Follow the steps in order for the best
            learning experience. Don't skip ahead!
          </div>
        </div>
      )}
    </div>
  );
}

export default SmartPath;
