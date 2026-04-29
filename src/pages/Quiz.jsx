// =====================================================
// Quiz.jsx - MCQ Quiz Page (Improved)
// Changes: Better UI, live score display, feedback boxes
// =====================================================

import { useState } from "react";
import { quizQuestions } from "../data/sampleData";
import "./Quiz.css";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  // Select an answer option
  function handleSelectAnswer(option) {
    if (answered) return; // prevent changing after submit
    setSelectedAnswer(option);
  }

  // Check the answer
  function handleCheckAnswer() {
    if (!selectedAnswer) return;
    setAnswered(true);
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
  }

  // Move to next question or finish
  function handleNextQuestion() {
    if (currentIndex === quizQuestions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  }

  // Restart quiz from beginning
  function handleRestart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setAnswered(false);
  }

  // ---- Score Screen ----
  if (quizFinished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <div className="quiz-page">
        <div className="score-card">
          <div className="score-emoji">
            {percentage >= 80 ? "🎉" : percentage >= 50 ? "👍" : "😅"}
          </div>
          <h2>Quiz Complete!</h2>
          <p className="score-text">
            You answered <strong>{score}</strong> out of{" "}
            <strong>{quizQuestions.length}</strong> correctly
          </p>
          <div className="score-bar-wrapper">
            <div className="score-bar-fill" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="score-percent">{percentage}%</p>
          <p className="score-feedback">
            {percentage >= 80
              ? "🚀 Excellent work! You really know your stuff!"
              : percentage >= 50
              ? "📖 Good job! Keep practicing to improve."
              : "💪 Don't give up! Review the courses and try again."}
          </p>
          <button className="restart-btn" onClick={handleRestart}>
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  // ---- Main Quiz ----
  return (
    <div className="quiz-page">
      {/* Header */}
      <div className="quiz-header">
        <h1>🧠 Quick Quiz</h1>
        <p>Test what you've learned so far!</p>
      </div>

      {/* Progress bar + live score */}
      <div className="quiz-progress">
        <div className="quiz-progress-top">
          <span>Question {currentIndex + 1} of {quizQuestions.length}</span>
          {/* Live score counter */}
          <span className="quiz-score-live">Score: {score}/{currentIndex + (answered ? 1 : 0)}</span>
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="question-card">
        {/* Question number pill */}
        <span className="question-number">Q{currentIndex + 1}</span>

        <h2 className="question-text">{currentQuestion.question}</h2>

        {/* Answer options */}
        <div className="options-list">
          {currentQuestion.options.map((option, index) => {
            let optionClass = "option-btn";
            if (answered) {
              if (option === currentQuestion.answer) optionClass += " correct";
              else if (option === selectedAnswer) optionClass += " wrong";
            } else if (option === selectedAnswer) {
              optionClass += " selected";
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleSelectAnswer(option)}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Check answer button (shown before answering) */}
        {!answered && (
          <button
            className="check-btn"
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
          >
            Check Answer
          </button>
        )}

        {/* Feedback + next button (shown after answering) */}
        {answered && (
          <div className="answer-feedback">
            <div className={`feedback-box ${selectedAnswer === currentQuestion.answer ? "feedback-correct" : "feedback-wrong"}`}>
              {selectedAnswer === currentQuestion.answer
                ? "✅ Correct! Great job!"
                : `❌ Wrong! Correct answer: "${currentQuestion.answer}"`}
            </div>
            <button className="next-btn" onClick={handleNextQuestion}>
              {currentIndex === quizQuestions.length - 1
                ? "See Final Score 🎯"
                : "Next Question →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
