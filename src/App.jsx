import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Bell, Search } from 'lucide-react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import StudentDetails from './pages/StudentDetails'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import { initialStudents, initialCourses } from './data'

const STUDENTS_STORAGE_KEY = 'campusflow_students_v1'
const COURSES_STORAGE_KEY = 'campusflow_courses_v1'

function loadSavedData(key, fallback) {
  try {
    const saved = localStorage.getItem(key)
    return saved === null ? fallback : JSON.parse(saved)
  } catch {
    return fallback
  }
}


export default function App() {
  const [students, setStudents] = useState(() => loadSavedData(STUDENTS_STORAGE_KEY, initialStudents).map(student => ({ ...student, id: String(student.id) })))
  const [courses, setCourses] = useState(() => loadSavedData(COURSES_STORAGE_KEY, initialCourses))

  useEffect(() => {
    localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(students))
  }, [students])

  useEffect(() => {
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(courses))
  }, [courses])
  const location = useLocation()
  const titles = { '/': 'Overview', '/students': 'Students', '/courses': 'Courses' }
  const title = titles[location.pathname] || (location.pathname.startsWith('/students/') ? 'Student profile' : location.pathname.startsWith('/courses/') ? 'Course details' : 'Workspace')
  return <div className="app-shell"><Navbar /><main className="main-area"><header className="topbar"><div className="breadcrumb">Workspace <span>/</span> <strong>{title}</strong></div><div className="topbar-right"><span className="term-pill">SEMESTER 5</span><button className="top-icon" aria-label="Notifications"><Bell size={19} /><i /></button><div className="top-avatar">AD</div></div></header><div className="route-content"><Routes>
    <Route path="/" element={<Dashboard students={students} courses={courses} />} />
    <Route path="/dashboard" element={<Navigate to="/" replace />} />
    <Route path="/students" element={<Students students={students} setStudents={setStudents} />} />
    <Route path="/students/:id" element={<StudentDetails students={students} />} />
    <Route path="/courses" element={<Courses courses={courses} setCourses={setCourses} />} />
    <Route path="/courses/:id" element={<CourseDetails courses={courses} students={students} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></div></main></div>
}