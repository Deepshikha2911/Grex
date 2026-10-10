import { useMemo, useState } from 'react'
import { Plus, Search, Users, X } from 'lucide-react'
import StudentCard from '../components/StudentCard'
import StudentForm from '../components/StudentForm'
export default function Students({ students, setStudents }) {
  const [search, setSearch] = useState(''); const [course, setCourse] = useState('All courses'); const [editing, setEditing] = useState(null); const [showForm, setShowForm] = useState(false)
  const filtered = useMemo(() => students.filter(s => (`${s.name} ${s.email} ${s.id}`.toLowerCase().includes(search.toLowerCase())) && (course === 'All courses' || s.course === course)), [students, search, course])
  const save = s => { if (editing) setStudents(old => old.map(x => x.id === editing.id ? s : x)); else { if (students.some(x => x.id === s.id)) { alert('That enrollment number already exists.'); return } setStudents(old => [s, ...old]) } setEditing(null); setShowForm(false) }
  const remove = id => { if (window.confirm('Delete this student record?')) setStudents(old => old.filter(s => s.id !== id)) }
  const edit = s => { setEditing(s); setShowForm(true) }
  return <div className="page">
    <div className="page-title-row"><div><span className="eyebrow">PEOPLE DIRECTORY</span><h1>Student management</h1><p>Keep student records organized, searchable and up to date.</p></div><button className="button primary" onClick={() => { setEditing(null); setShowForm(true) }}><Plus size={17} /> Add student</button></div>
    <div className="mini-stats"><div><Users size={19} /><span><strong>{students.length}</strong><small>Registered students</small></span></div><div><strong>{students.filter(s => s.attendance >= 75).length}</strong><span><small>Attendance eligible</small></span></div><div><strong>{new Set(students.map(s => s.course)).size}</strong><span><small>Programs represented</small></span></div></div>
    <section className="panel table-panel"><div className="table-toolbar"><div><h2>All students <span className="count-badge">{filtered.length}</span></h2><p>Search or filter records to find a student.</p></div><div className="filters"><label className="search-box"><Search size={17} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, ID…" /></label><select value={course} onChange={e => setCourse(e.target.value)}><option>All courses</option><option>B.Tech CSE</option><option>B.Tech Chemical</option><option>BCA</option><option>MCA</option></select></div></div>
      <div className="table-wrap"><table><thead><tr><th>STUDENT</th><th>ENROLLMENT</th><th>COURSE</th><th>SEMESTER</th><th>ATTENDANCE</th><th>STATUS</th><th>ACTIONS</th></tr></thead><tbody>{filtered.map(s => <StudentCard key={s.id} student={s} onDelete={remove} onEdit={edit} />)}</tbody></table>{filtered.length === 0 && <div className="empty-state"><Users size={28} /><strong>No students found</strong><span>Try another search or add a new student.</span></div>}</div>
    </section>
    {showForm && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) { setShowForm(false); setEditing(null) } }}><section className="modal"><div className="modal-heading"><div><span className="eyebrow">{editing ? 'EDIT RECORD' : 'NEW RECORD'}</span><h2>{editing ? 'Update student' : 'Add a student'}</h2><p>Enter the student's academic information below.</p></div><button className="icon-button" onClick={() => { setShowForm(false); setEditing(null) }}><X size={18} /></button></div><StudentForm initial={editing} onSave={save} onCancel={() => { setShowForm(false); setEditing(null) }} /></section></div>}
    <footer className="page-footer">Grex <span>Student records · Demo data stored for this session.</span></footer>
  </div>
}