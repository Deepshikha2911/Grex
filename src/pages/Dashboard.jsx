import { Link } from 'react-router-dom'
import { Users, BookOpen, GraduationCap, TrendingUp, ArrowUpRight, CalendarDays, Sparkles } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import { attendanceStatus } from '../data'
export default function Dashboard({ students, courses }) {
  const average = students.length ? Math.round(students.reduce((sum, s) => sum + Number(s.attendance), 0) / students.length) : 0
  const eligible = students.filter(s => attendanceStatus(Number(s.attendance)) === 'Eligible').length
  return <div className="page">
    <div className="welcome-banner"><div><span className="eyebrow"><Sparkles size={14} /> YOUR CAMPUS, IN SYNC</span><h1>Good morning, Admin.</h1><p>Here’s what’s happening across your academic workspace today.</p></div><div className="welcome-art"><GraduationCap size={76} strokeWidth={1.1} /></div></div>
    <div className="section-heading"><div><h2>At a glance</h2><p>A quick snapshot of your institution.</p></div><span className="date-pill"><CalendarDays size={15} /> Academic overview</span></div>
    <div className="stats-grid">
      <DashboardCard label="Total students" value={students.length} note="Currently registered" icon={Users} tone="teal" />
      <DashboardCard label="Total courses" value={courses.length} note="Across all programs" icon={BookOpen} tone="sand" />
      <DashboardCard label="Active courses" value={courses.length} note="Available this semester" icon={GraduationCap} tone="lavender" />
      <DashboardCard label="Average attendance" value={`${average}%`} note={`${eligible} students eligible`} icon={TrendingUp} tone="coral" />
    </div>
    <div className="dashboard-grid">
      <section className="panel"><div className="panel-heading"><div><h2>Recent students</h2><p>Latest student records in your system</p></div><Link to="/students" className="subtle-link">View all <ArrowUpRight size={15} /></Link></div>
        <div className="recent-list">{students.slice(0, 4).map(s => <div className="recent-row" key={s.id}><span className="table-avatar">{s.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</span><div className="recent-info"><strong>{s.name}</strong><small>{s.course} · Semester {s.semester}</small></div><span className={`status ${attendanceStatus(Number(s.attendance)).toLowerCase()}`}>{attendanceStatus(Number(s.attendance))}</span></div>)}</div>
      </section>
      <section className="panel attendance-panel"><div className="panel-heading"><div><h2>Attendance health</h2><p>Based on the 75% eligibility rule</p></div></div><div className="attendance-number">{average}<small>%</small></div><div className="large-progress"><span style={{ width: `${average}%` }} /></div><div className="legend"><span><i className="dot green" />Eligible: {eligible}</span><span><i className="dot amber" />Warning: {students.filter(s => attendanceStatus(Number(s.attendance)) === 'Warning').length}</span><span><i className="dot red" />Detained: {students.filter(s => attendanceStatus(Number(s.attendance)) === 'Detained').length}</span></div><p className="helper-note">Attendance below 60% is marked detained. Students between 60% and 74% receive a warning.</p></section>
    </div>
    <footer className="page-footer">Grex <span>Made for better campus coordination.</span></footer>
  </div>
}