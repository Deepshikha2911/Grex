import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, BookOpen, GraduationCap } from 'lucide-react'

const links = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/students', label: 'Students', icon: Users },
  { to: '/courses', label: 'Courses', icon: BookOpen }
]
export default function Navbar() {
  return <aside className="sidebar">
    <div className="brand"><span className="brand-mark"><GraduationCap size={24} /></span><span>Grex<small>COLLEGE MANAGEMENT</small></span></div>
    <p className="nav-caption">WORKSPACE</p>
    <nav>{links.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><Icon size={19} /><span>{label}</span></NavLink>)}</nav>
    <div className="sidebar-bottom"><div className="avatar">AD</div><div><strong>Admin Desk</strong><small>Academic coordinator</small></div><span className="online-dot" /></div>
  </aside>
}