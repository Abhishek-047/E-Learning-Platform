# 📚 LearnPath – Interactive E-Learning Platform

> A modern, interactive E-Learning platform built with React.  
> LearnPath provides a seamless educational experience featuring video courses, personalized study paths, interactive quizzes, and comprehensive progress tracking.

---

## 🌟 Key Features

| Feature | Description |
|---|---|
| 🏠 **Home Dashboard** | Dynamic hero section, platform statistics, featured courses, and student testimonials. |
| 🌙 **Dark Mode** | Full platform dark mode toggle for a comfortable viewing experience. |
| 📚 **Course Catalog** | Browse courses with real-time search and dynamic level-based filtering. |
| 🎥 **Video Learning** | Immersive course details with responsive embedded YouTube video players. |
| 📝 **Personal Scratchpad** | Built-in note-taking interface directly alongside the video player. |
| 👍 **Interactive Feedback** | Rate courses and leave thumbs up/down feedback on courses and cards. |
| ✅ **Progress Tracking** | Mark lessons as complete and visualize progress with dynamic percentage bars. |
| 🧭 **Smart Study Path** | Personalized learning roadmaps tailored to the user's current skill level. |
| 🧠 **Interactive Quizzes** | Multiple-choice assessments with live scoring and instant feedback. |
| 👤 **User Profile** | Comprehensive student dashboard displaying overall statistics, achievements, and recent activity. |

---

## 🖥️ Platform Architecture & Routes

| Module | Route |
|---|---|
| Home | `/` |
| Course Catalog | `/courses` |
| Course Details | `/courses/:id` |
| Smart Study Path | `/smart-path` |
| Assessment Quiz | `/quiz` |
| Progress Tracker | `/progress` |
| Student Profile | `/profile` |

---

## 🛠️ Tech Stack

- ⚛️ **React 18** – Modern functional components and Hooks (`useState`, `useEffect`)
- 🔗 **React Router DOM** – Client-side routing for single-page application (SPA) experience
- 🎨 **Vanilla CSS3** – Custom, responsive component-level styling with CSS variables
- ⚡ **Vite** – Next-generation frontend tooling for rapid development

---

## 📁 Project Structure

```text
E-Learning-Platform/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css      # Main navigation & theme toggle
│   │   ├── Footer.jsx / .css      # Global footer
│   │   └── CourseCard.jsx / .css  # Reusable course display component
│   ├── pages/
│   │   ├── Home.jsx / .css        # Landing dashboard
│   │   ├── Courses.jsx / .css     # Catalog with search/filter algorithms
│   │   ├── CourseDetails.jsx / .css  # Video player, scratchpad, feedback
│   │   ├── SmartPath.jsx / .css   # Dynamic roadmap generator
│   │   ├── Quiz.jsx / .css        # Assessment engine
│   │   ├── Progress.jsx / .css    # Detailed progress analytics
│   │   └── Profile.jsx / .css     # User statistics dashboard
│   ├── data/
│   │   └── sampleData.js          # Centralized mock data structure
│   ├── App.jsx                    # Application root & routing
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles & Dark Mode themes
├── package.json
└── README.md
```

---

## 🚀 Local Development Setup

**1. Clone the repository**
```bash
git clone https://github.com/Abhishek-047/E-Learning-Platform.git
cd E-Learning-Platform
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. View in browser**
Navigate to `http://localhost:5173` in your web browser.

---

## 💡 Implementation Details

This application is designed as a standalone frontend prototype. To maintain simplicity and focus on UI/UX architecture, it currently operates without a backend server or external database. All application state is managed within React, and content is dynamically rendered from a centralized mock data structure (`src/data/sampleData.js`). 

Core React concepts utilized:
- **State Management:** Complex UI state, filtering, and quiz logic handled via `useState` and `useEffect`.
- **Prop Drilling:** Component communication and data flow.
- **Dynamic Routing:** Utilizing `useParams` and `useNavigate` for seamless transitions.
- **Array Transformations:** Extensive use of `.map()` and `.filter()` for data rendering and search mechanics.
