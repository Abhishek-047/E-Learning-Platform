# 📚 LearnPath – E-Learning Platform with Smart Study Path

> A beginner-friendly React capstone project built by 1st year CS students.  
> Learn web development at your own pace — explore courses, follow a smart path, take quizzes, and track your progress.

---

## 🌟 Live Features

| Feature | Description |
|---|---|
| 🏠 **Home Page** | Hero section, stats bar, featured courses, testimonials, CTA |
| 📚 **Courses** | Browse all 8 courses with search + level filter |
| 🎥 **Video Learning** | Each course has an embedded YouTube video |
| ✅ **Mark Complete** | Mark lessons as done inside each course |
| 🧭 **Smart Study Path** | Pick your level → get a personalized learning roadmap |
| 🧠 **Quiz** | 8 MCQ questions with live score + instant feedback |
| 📊 **Progress Tracker** | Check off lessons, see completed/remaining stats |
| 👤 **Profile Page** | Student stats, progress bars, activity timeline |

---

## 🖥️ Pages & Routes

| Page | Route |
|---|---|
| Home | `/` |
| All Courses | `/courses` |
| Course Details | `/courses/:id` |
| Smart Study Path | `/smart-path` |
| Quiz | `/quiz` |
| Progress Tracker | `/progress` |
| Student Profile | `/profile` |

---

## 🛠️ Tech Stack

- ⚛️ **React** – Functional components, `useState`, `props`
- 🔗 **React Router DOM** – Client-side routing, `useParams`, `useNavigate`
- 🎨 **Plain CSS** – Component-level CSS files, no frameworks
- ⚡ **Vite** – Fast dev server and build tool

---

## 📁 Folder Structure

```
E-Learning-Platform/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css      # Sticky top navigation
│   │   ├── Footer.jsx / .css      # Dark 3-column footer
│   │   └── CourseCard.jsx / .css  # Reusable course card
│   ├── pages/
│   │   ├── Home.jsx / .css        # Landing page
│   │   ├── Courses.jsx / .css     # All courses + search + filter
│   │   ├── CourseDetails.jsx / .css  # Video + lessons + mark complete
│   │   ├── SmartPath.jsx / .css   # Personalized learning roadmap
│   │   ├── Quiz.jsx / .css        # MCQ quiz with live score
│   │   ├── Progress.jsx / .css    # Lesson progress tracker
│   │   └── Profile.jsx / .css     # Student profile & stats
│   ├── data/
│   │   └── sampleData.js          # All local mock data (no backend)
│   ├── App.jsx                    # Router + route definitions
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles + Google Font
├── package.json
└── README.md
```

---

## 🚀 How to Run Locally

**1. Clone the repo**
```bash
git clone https://github.com/Abhishek-047/E-Learning-Platform.git
cd E-Learning-Platform
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the dev server**
```bash
npm run dev
```

**4. Open in browser**
```
http://localhost:5173
```

---

## 📸 Pages Overview

### 🏠 Home
- Badge + strong hero heading + two CTA buttons
- Indigo stats bar: 8+ Courses · 500+ Students · 8 Quiz Questions · 3 Levels
- Featured course cards with hover effects
- Student testimonials
- Gradient CTA banner at bottom

### 📚 Courses
- Search bar (searches title, level, description)
- Level filter pills: All · Beginner · Intermediate · Advanced
- Both filters work together in real-time using `filter()`

### 🎥 Course Details
- Embedded YouTube video (responsive 16:9 iframe)
- Topics covered list
- Lessons list with **Mark Complete** toggle buttons
- Per-course progress bar

### 🧭 Smart Study Path
- Pick level: 🌱 Beginner / 🔥 Intermediate / 🚀 Advanced
- Step-by-step learning roadmap with arrows

### 🧠 Quiz
- 8 multiple choice questions
- Live score counter updates after each answer
- Green / red feedback on correct / wrong answers
- Final score screen with percentage bar

### 📊 Progress Tracker
- 4 stat cards: Done · Remaining · % · Total
- Two-column layout: completed list (sticky) + course checkboxes
- Per-course mini progress bars

### 👤 Profile
- Gradient hero card with initials avatar, name, email, level badge
- 4 stat cards: Enrolled · Completed · Quiz Score · Overall %
- Learning progress bars (lessons + quiz performance)
- Recent activity timeline
- Enrolled courses list
- Button to open full Progress Tracker

---

## 💡 React Concepts Used

```js
useState()         // manage quiz answers, filters, progress state
props              // CourseCard receives course data from parent
useParams()        // get course ID from URL in CourseDetails
useNavigate()      // navigate between pages programmatically
array.filter()     // search and level filter on Courses page
array.map()        // render course cards, lessons, quiz options
```

---

> **This is a college capstone project** — built with React + React Router, no backend, no database. All data is stored locally in `src/data/sampleData.js`.
