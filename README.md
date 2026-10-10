# Grex — Student and Course Management System

Grex is a React-based web application for managing student and course information through a simple interface.

## Features

- Dashboard for viewing student and course information
- Add, edit, and delete student records
- Add and delete courses
- View student and course details
- Store changes in the browser using localStorage
- Responsive interface built with React and CSS

## Project Folder Structure

```
Grex/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── DashboardCard.jsx
    │   ├── StudentCard.jsx
    │   ├── StudentForm.jsx
    │   └── CourseCard.jsx
    ├── pages/
    │   ├── Dashboard.jsx
    │   ├── Students.jsx
    │   ├── StudentDetails.jsx
    │   ├── Courses.jsx
    │   └── CourseDetails.jsx
    └── styles/
        └── style.css
```

## Technologies Used

- React
- JavaScript
- Vite
- CSS
- Browser localStorage

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

1. Clone or download this repository.
2. Open the project folder in a terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal.

## Data Storage

Student and course changes are saved in the browser's localStorage. Data persists across refreshes in the same browser, but it is not shared between different users or devices.

## Project Purpose

Developed as an academic project to practice React, component-based development, state management, and browser-side data persistence.