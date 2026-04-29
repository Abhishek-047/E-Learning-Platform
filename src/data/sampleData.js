// =====================================================
// sampleData.js - All local data for the LearnPath app
// Updated: Added YouTube video links, more course details,
//          quiz scores, profile data, and testimonials
// =====================================================

// ---- All Courses ----
export const courses = [
  {
    id: 1,
    title: "HTML Basics",
    level: "Beginner",
    duration: "2 weeks",
    description:
      "Learn the building blocks of every website. Understand tags, elements, and page structure.",
    // YouTube embed link (use /embed/ format for iframe)
    video: "https://www.youtube.com/embed/qz0aGYrrlhU",
    topics: [
      "Introduction to HTML",
      "Tags & Elements",
      "Forms & Tables",
      "Semantic HTML",
      "Project: Personal Webpage",
    ],
    lessons: [
      { id: "html-1", title: "What is HTML?" },
      { id: "html-2", title: "Basic Tags & Structure" },
      { id: "html-3", title: "Headings, Paragraphs & Links" },
      { id: "html-4", title: "Images & Lists" },
      { id: "html-5", title: "Forms & Input Fields" },
      { id: "html-6", title: "Tables in HTML" },
      { id: "html-7", title: "Semantic Elements" },
    ],
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    level: "Beginner",
    duration: "2 weeks",
    description:
      "Style your webpages with CSS. Cover selectors, box model, Flexbox, and basic responsiveness.",
    video: "https://www.youtube.com/embed/OXGznpKZ_sA",
    topics: [
      "CSS Selectors",
      "Box Model",
      "Flexbox",
      "Colors & Typography",
      "Responsive Basics",
    ],
    lessons: [
      { id: "css-1", title: "What is CSS?" },
      { id: "css-2", title: "Selectors & Properties" },
      { id: "css-3", title: "The Box Model" },
      { id: "css-4", title: "Colors, Fonts & Text" },
      { id: "css-5", title: "Flexbox Layout" },
      { id: "css-6", title: "Responsive Design Basics" },
    ],
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    level: "Beginner",
    duration: "3 weeks",
    description:
      "Make your websites interactive. Learn variables, functions, loops, and DOM manipulation.",
    video: "https://www.youtube.com/embed/W6NZfCO5SIk",
    topics: [
      "Variables & Data Types",
      "Functions",
      "Loops & Conditionals",
      "Arrays & Objects",
      "DOM Manipulation",
    ],
    lessons: [
      { id: "js-1", title: "Introduction to JavaScript" },
      { id: "js-2", title: "Variables & Data Types" },
      { id: "js-3", title: "Functions" },
      { id: "js-4", title: "Conditionals & Loops" },
      { id: "js-5", title: "Arrays & Objects" },
      { id: "js-6", title: "DOM Manipulation" },
      { id: "js-7", title: "Events & Event Listeners" },
    ],
  },
  {
    id: 4,
    title: "React Basics",
    level: "Intermediate",
    duration: "3 weeks",
    description:
      "Build dynamic UIs with React. Learn components, state, props, and hooks.",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    topics: [
      "Components & JSX",
      "Props",
      "useState Hook",
      "Handling Events",
      "Lists & Keys",
    ],
    lessons: [
      { id: "react-1", title: "What is React?" },
      { id: "react-2", title: "Your First Component" },
      { id: "react-3", title: "Props – Passing Data" },
      { id: "react-4", title: "useState – Managing State" },
      { id: "react-5", title: "Handling Events in React" },
      { id: "react-6", title: "Rendering Lists" },
      { id: "react-7", title: "Conditional Rendering" },
    ],
  },
  {
    id: 5,
    title: "Git & GitHub",
    level: "Beginner",
    duration: "1 week",
    description:
      "Version control your projects with Git and collaborate using GitHub.",
    video: "https://www.youtube.com/embed/RGOj5yH7evk",
    topics: [
      "Git Init & Commit",
      "Branches",
      "Push & Pull",
      "Pull Requests",
      "Collaboration Flow",
    ],
    lessons: [
      { id: "git-1", title: "What is Version Control?" },
      { id: "git-2", title: "Setting up Git" },
      { id: "git-3", title: "Commit & Push" },
      { id: "git-4", title: "Branches & Merging" },
      { id: "git-5", title: "GitHub & Pull Requests" },
    ],
  },
  {
    id: 6,
    title: "JavaScript DOM & Fetch API",
    level: "Intermediate",
    duration: "2 weeks",
    description:
      "Deep dive into DOM manipulation and learn how to fetch data from APIs using JavaScript.",
    video: "https://www.youtube.com/embed/0ik6X4DJKCc",
    topics: [
      "DOM Selection & Events",
      "Modifying DOM",
      "Fetch API",
      "Async/Await",
      "Error Handling",
    ],
    lessons: [
      { id: "dom-1", title: "DOM Selection Methods" },
      { id: "dom-2", title: "Modifying HTML with JS" },
      { id: "dom-3", title: "Introduction to Fetch API" },
      { id: "dom-4", title: "Async & Await" },
      { id: "dom-5", title: "Working with JSON Data" },
      { id: "dom-6", title: "Handling Errors in Fetch" },
    ],
  },
  {
    id: 7,
    title: "React Router & State Management",
    level: "Advanced",
    duration: "3 weeks",
    description:
      "Build multi-page React apps with React Router and manage complex state.",
    video: "https://www.youtube.com/embed/Law7wfdg_ls",
    topics: [
      "React Router Setup",
      "Route Params",
      "useContext Hook",
      "useReducer",
      "Project Structure",
    ],
    lessons: [
      { id: "rr-1", title: "React Router Introduction" },
      { id: "rr-2", title: "Route Params & Navigation" },
      { id: "rr-3", title: "useContext for Global State" },
      { id: "rr-4", title: "useReducer for Complex State" },
      { id: "rr-5", title: "Structuring a Big React Project" },
    ],
  },
  {
    id: 8,
    title: "Building Full Projects",
    level: "Advanced",
    duration: "4 weeks",
    description:
      "Apply everything you know to build complete, real-world projects from scratch.",
    video: "https://www.youtube.com/embed/b9eMGE7QtTk",
    topics: [
      "Project Planning",
      "Component Architecture",
      "API Integration",
      "Deployment with Vercel",
      "Portfolio Building",
    ],
    lessons: [
      { id: "proj-1", title: "Planning Your Project" },
      { id: "proj-2", title: "Building the UI" },
      { id: "proj-3", title: "Connecting to an API" },
      { id: "proj-4", title: "Testing & Debugging" },
      { id: "proj-5", title: "Deploying to Vercel" },
    ],
  },
];

// ---- Smart Study Paths (by level) ----
export const studyPaths = {
  Beginner: {
    description:
      "Perfect for absolute beginners. Start from the very basics of the web.",
    steps: [
      {
        title: "HTML Basics",
        icon: "🌐",
        detail: "Learn HTML tags, structure, forms, and semantic elements.",
      },
      {
        title: "CSS Fundamentals",
        icon: "🎨",
        detail: "Style your pages with selectors, Flexbox, and responsive design.",
      },
      {
        title: "JavaScript Essentials",
        icon: "⚡",
        detail: "Add interactivity with variables, functions, and DOM manipulation.",
      },
      {
        title: "Git & GitHub",
        icon: "🗂️",
        detail: "Save and share your code using version control.",
      },
    ],
  },
  Intermediate: {
    description: "You know the basics. Now level up with JavaScript and React.",
    steps: [
      {
        title: "JavaScript DOM & Fetch API",
        icon: "🔗",
        detail: "Master DOM manipulation and fetch real data from APIs.",
      },
      {
        title: "React Basics",
        icon: "⚛️",
        detail: "Build component-based UIs using React, props, and state.",
      },
      {
        title: "React Router",
        icon: "🗺️",
        detail: "Create multi-page apps and navigate between them.",
      },
    ],
  },
  Advanced: {
    description:
      "You're comfortable with React. Time to build real-world full projects.",
    steps: [
      {
        title: "React Router & State Management",
        icon: "🧠",
        detail: "Deep dive into routing, context, and useReducer.",
      },
      {
        title: "Building Full Projects",
        icon: "🏗️",
        detail: "Build and deploy complete applications from scratch.",
      },
      {
        title: "Portfolio Building",
        icon: "💼",
        detail: "Showcase your work and land your first job or internship.",
      },
    ],
  },
};

// ---- Quiz Questions ----
export const quizQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Markup Links",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    id: 3,
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Number"],
    answer: "Float",
  },
  {
    id: 4,
    question:
      "What hook do you use to manage state in a React functional component?",
    options: ["useEffect", "useRef", "useContext", "useState"],
    answer: "useState",
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    id: 6,
    question: "Which Git command saves your changes locally?",
    options: ["git push", "git save", "git commit", "git pull"],
    answer: "git commit",
  },
  {
    id: 7,
    question:
      "In React, what is used to pass data from parent to child component?",
    options: ["state", "props", "context", "hooks"],
    answer: "props",
  },
  {
    id: 8,
    question: "Which HTML tag is used to link a CSS file?",
    options: ["<style>", "<css>", "<link>", "<script>"],
    answer: "<link>",
  },
];

// ---- Dummy Student Profile Data ----
export const studentProfile = {
  name: "Abhishek Kumar",
  email: "abhishek.kumar@college.edu",
  avatar: "AK", // initials for avatar
  level: "Intermediate",
  joinDate: "January 2024",
  enrolledCourses: 4,
  lessonsCompleted: 12,
  totalLessons: 47,
  quizScore: 6,
  quizTotal: 8,
  recentActivity: [
    { action: "Completed lesson", detail: "What is HTML?", time: "2 hours ago" },
    { action: "Started course", detail: "React Basics", time: "Yesterday" },
    { action: "Took Quiz", detail: "Scored 6/8", time: "2 days ago" },
    { action: "Completed lesson", detail: "Flexbox Layout", time: "3 days ago" },
    { action: "Completed lesson", detail: "CSS Selectors", time: "4 days ago" },
  ],
};

// ---- Testimonials (dummy student reviews) ----
export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "1st Year CSE Student",
    review:
      "LearnPath made learning React so easy! The smart study path feature told me exactly where to start. I finished HTML and CSS in 2 weeks!",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "2nd Year IT Student",
    review:
      "The quiz section is really fun and tests your knowledge well. Progress tracker keeps me motivated to complete more lessons every day!",
    rating: 5,
    avatar: "RV",
  },
];
